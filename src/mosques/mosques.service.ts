import { Injectable } from '@nestjs/common';
import { CreateMosqueDto } from './dto/create-mosque.dto';
import { UpdateMosqueDto } from './dto/update-mosque.dto';

@Injectable()
export class MosquesService {
  create(createMosqueDto: CreateMosqueDto) {
    return 'This action adds a new mosque';
  }

  findAll() {
    return `This action returns all mosques`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mosque`;
  }

  update(id: number, updateMosqueDto: UpdateMosqueDto) {
    return `This action updates a #${id} mosque`;
  }

  remove(id: number) {
    return `This action removes a #${id} mosque`;
  }
}
