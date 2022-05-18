import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Province } from './province.entity';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private provinceRepository: Repository<Province>,
  ) {}

  findAll(): Promise<Province[]> {
    return this.provinceRepository.find();
  }

  async getCitiesById(id: number): Promise<Province> {
    const province = await this.provinceRepository.findOne(id, {
      relations: ['cities'],
    });
    if (!province) {
      throw new NotFoundException('Province not found');
    }
    return province;
  }
}
