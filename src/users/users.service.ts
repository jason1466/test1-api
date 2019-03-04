import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Common } from 'src/common.interface';
import { UserSchema } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Common') private readonly commonModel: Model<Common>,
  ) {}

  userModel = this.commonModel.discriminator<User>('User', UserSchema);

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser: User = new this.userModel(
      ...(createUserDto as User),
      ...({
        createdAt: new Date().toISOString(),
        createdBy: 'Jason',
      } as User),
    );
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
