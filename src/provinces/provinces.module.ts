import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from './province.entity';
import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Province])],
  providers: [ProvincesService],
  controllers: [ProvincesController],
})
export class ProvincesModule {}
