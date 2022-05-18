import { Module } from '@nestjs/common';
import { MosquesService } from './mosques.service';
import { MosquesController } from './mosques.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mosque } from './mosque.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mosque])],
  controllers: [MosquesController],
  providers: [MosquesService],
})
export class MosquesModule {}
