import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './city.entity';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll(): Promise<City[]> {
    return this.citiesService.findAll();
  }

  @Get(':id/mosques')
  getMosquesById(@Param('id') id: number): Promise<City> {
    return this.citiesService.getMosquesByCity(id);
  }
}
