import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { ProvincesModule } from './provinces/provinces.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProvincesModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
