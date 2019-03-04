import { Controller, Get, Post, Body, HttpService } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly http: HttpService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    // return this.http
    //   .get('https://teamwizapi.azurewebsites.net/.auth/me');
    // .subscribe(x => {
    //   console.log('me: ' + JSON.stringify(this.usersService.me));
    // });
    // .toPromise()
    // .then(x => x[0]);

    return this.usersService.findAll();
  }
}
