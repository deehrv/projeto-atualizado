import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_usuarios"})
      export class Usuario {

        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number
        
        @IsNotEmpty()
        @ApiProperty()
        @Column({length: 255, nullable: false})
        nome: string
        
        @IsEmail()
        @ApiProperty()
        @Column({length: 255, nullable: false})
        usuario: string

        @IsNotEmpty()
        @ApiProperty()
        @MinLength(8)
        @Column({length: 255, nullable: false})
        senha: string

        @Column({length: 5000})
        @ApiProperty()
        foto: string



        
        @OneToMany(() => Postagem, (postagem) => postagem.usuario)
        @ApiProperty({ type: () => Usuario})
        postagem: Postagem[]

    }