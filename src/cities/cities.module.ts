import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CitiesService],
  controllers: [CitiesController],
})
export class CitiesModule {}
