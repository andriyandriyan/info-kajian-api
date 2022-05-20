import { IsNumber, IsString } from 'class-validator';

export class MosqueDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsNumber()
  city_id: number;
}
