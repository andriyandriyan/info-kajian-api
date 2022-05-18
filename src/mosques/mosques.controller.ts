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
import { CreateMosqueDto } from './dto/create-mosque.dto';
import { UpdateMosqueDto } from './dto/update-mosque.dto';

@Controller('mosques')
export class MosquesController {
  constructor(private readonly mosquesService: MosquesService) {}

  @Post()
  create(@Body() createMosqueDto: CreateMosqueDto) {
    return this.mosquesService.create(createMosqueDto);
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
  update(@Param('id') id: string, @Body() updateMosqueDto: UpdateMosqueDto) {
    return this.mosquesService.update(+id, updateMosqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mosquesService.remove(+id);
  }
}
