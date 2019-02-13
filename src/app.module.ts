import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ClubsModule } from './clubs/clubs.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://teamwiz:IEht4GjHsalkD8ME52wdHBQHzpl9WiW2by5XqF3rc5eAEyXuN2CgPNEEc1eR80pErkhBvA9svK7hRcGybnzp9w==@teamwiz.documents.azure.com:10255/?ssl=true&replicaSet=globaldb',
      {
        dbName: 'Test',
        useNewUrlParser: true,
      },
    ),
    ClubsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
