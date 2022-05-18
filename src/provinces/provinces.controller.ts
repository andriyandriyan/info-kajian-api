import { Controller, Get, Param } from '@nestjs/common';
import { Province } from './province.entity';
import { ProvincesService } from './provinces.service';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Get()
  findAll(): Promise<Province[]> {
    return this.provincesService.findAll();
  }

  @Get(':id/cities')
  getCitiesById(@Param('id') id: number): Promise<Province> {
    return this.provincesService.getCitiesById(id);
  }
}
