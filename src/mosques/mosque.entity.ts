import { City } from 'src/cities/city.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('mosques')
export class Mosque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  address: string;

  @Column({ type: 'decimal', precision: 8, scale: 6 })
  lat: number;

  @Column({ type: 'decimal', precision: 9, scale: 6 })
  long: number;

  @ManyToOne(() => City, city => city.mosques)
  @JoinColumn({ name: 'city_id' })
  city: City;
}
