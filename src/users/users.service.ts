import { Model } from 'mongoose';
import { Injectable, HttpService } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Common } from 'src/common.interface';
import { UserSchema } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Common') private readonly commonModel: Model<Common>,
    private readonly http: HttpService,
  ) {}

  userModel = this.commonModel.discriminator<User>('User', UserSchema);
  me: { access_token: string } = { access_token: null };

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser: User = new this.userModel(createUserDto);
    // ...(createUserDto as User),
    // ...({
    //   createdAt: new Date().toISOString(),
    //   createdBy: 'Jason',
    // } as User)
    // );
    this.me = await this.http
      .get<any>('/.auth/me')
      .toPromise()
      .then(x => x[0]);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
