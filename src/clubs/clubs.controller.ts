import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateClubDto } from './create-club.dto';
import { ClubsService } from './clubs.service';
import { Club } from './club.interface';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Post()
  async create(@Body() createClubDto: CreateClubDto) {
    this.clubsService.create(createClubDto);
  }

  @Get()
  async findAll(): Promise<Club[]> {
    return this.clubsService.findAll();
  }
}
