import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Club } from './club.interface';
import { CreateClubDto } from './create-club.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Common } from 'src/common.interface';
import { ClubSchema } from './club.schema';

@Injectable()
export class ClubsService {
  constructor(
    @InjectModel('Common') private readonly commonModel: Model<Common>,
  ) {}

  clubModel = this.commonModel.discriminator<Club>('Club', ClubSchema);

  async create(createClubDto: CreateClubDto): Promise<Club> {
    const createdClub = new this.clubModel(createClubDto);
    return await createdClub.save();
  }

  async findAll(): Promise<Club[]> {
    return await this.clubModel.find().exec();
  }
}
