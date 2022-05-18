import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { ProvincesModule } from './provinces/provinces.module';
import { TransformInterceptor } from './transform.interceptor';
import { MosquesModule } from './mosques/mosques.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProvincesModule,
    CitiesModule,
    MosquesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
