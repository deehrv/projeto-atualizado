import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_tema"})
    export class Tema{

        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number

        @IsNotEmpty()
        @ApiProperty()
        @Column({length: 100, nullable: false})
        tema: string

        @IsNotEmpty()
        @ApiProperty()
        @Column()
        abordagem: string
    }