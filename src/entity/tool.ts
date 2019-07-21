import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Tag } from "./tag";

@Entity()
export class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: number;

  @ManyToMany(type => Tag)
  @JoinTable()
  tags: Tag[];
}
