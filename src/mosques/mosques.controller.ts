import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MosquesService } from './mosques.service';
import { MosqueDto } from './mosque.dto';

@Controller('mosques')
export class MosquesController {
  constructor(private readonly mosquesService: MosquesService) {}

  @Post()
  create(@Body() mosqueDto: MosqueDto) {
    console.log({ mosqueDto });
    return this.mosquesService.create(mosqueDto);
  }

  @Get()
  findAll() {
    return this.mosquesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mosquesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() mosqueDto: MosqueDto) {
    return this.mosquesService.update(+id, mosqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mosquesService.remove(+id);
  }
}
