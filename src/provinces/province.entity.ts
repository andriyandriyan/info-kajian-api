import { City } from 'src/cities/city.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('provinces')
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @OneToMany(() => City, city => city.province)
  cities: City[];
}
