import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async getMosquesByCity(id: number): Promise<City> {
    const city = await this.cityRepository.findOne(id, {
      relations: ['mosques'],
    });
    if (!city) {
      throw new NotFoundException('City not found');
    }
    return city;
  }
}
