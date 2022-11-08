import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';



@Entity({ name: "tb_postagens" })
export class Postagem {
       @PrimaryGeneratedColumn()
       @ApiProperty()
       id: number;

       @IsNotEmpty()
       @MaxLength(100)
       @ApiProperty()
       @Column({ length: 100, nullable: false })
       titulo: string;

       @IsNotEmpty()
       @MaxLength(2000)
       @ApiProperty()
       @Column({ length: 2000, nullable: false })
       midia_url: string;

       @IsNotEmpty()
       @MaxLength(3000)
       @ApiProperty()
       @Column({ length: 3000, nullable: false })
       texto: string;
       
       @UpdateDateColumn()
       @ApiProperty()
       data: Date; 



       @ApiProperty ({ type:()=> Usuario})
       @ManyToOne(type => Usuario, usuario => usuario.id)
       @JoinColumn({name: "usuario_id"})
       usuario: Usuario[];


       @ApiProperty ({ type:()=> Tema})
       @ManyToOne(type => Tema, tema => tema.id)
       @JoinColumn({name: "tema_id"})
       tema: Tema[];
}