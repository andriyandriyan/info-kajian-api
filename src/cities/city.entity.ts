import { Mosque } from 'src/mosques/mosque.entity';
import { Province } from 'src/provinces/province.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum CityType {
  Kota = 'Kota',
  'Kab.' = 'Kab.',
}

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: CityType, default: CityType['Kab.'] })
  type: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @ManyToOne(() => Province, province => province.cities)
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @OneToMany(() => Mosque, mosque => mosque.city)
  mosques: Mosque[];
}
