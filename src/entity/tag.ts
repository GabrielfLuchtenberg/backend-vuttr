import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Tool } from "./tool";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @ManyToMany(type => Tool)
  @JoinTable()
  tools: Tool[];
}
