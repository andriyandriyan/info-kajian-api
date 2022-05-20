import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MosqueDto } from './mosque.dto';
import { Mosque } from './mosque.entity';

@Injectable()
export class MosquesService {
  constructor(
    @InjectRepository(Mosque)
    private mosqueRepository: Repository<Mosque>,
  ) {}

  create(mosqueDto: MosqueDto) {
    return this.mosqueRepository.save(mosqueDto);
  }

  findAll() {
    return this.mosqueRepository.find({ relations: ['city'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} mosque`;
  }

  update(id: number, mosqueDto: MosqueDto) {
    return `This action updates a #${id} mosque`;
  }

  remove(id: number) {
    return `This action removes a #${id} mosque`;
  }
}
