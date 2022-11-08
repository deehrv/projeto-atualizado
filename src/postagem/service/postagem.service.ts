import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            relations: {
                tema: true
            }
        })
    }

    async findById(id: number): Promise<Postagem> {

        let postagem = await this.postagemRepository.findOne({
            
        })

        if (!postagem)
            throw new HttpException('Postagem não existe', HttpStatus.NOT_FOUND)

        return postagem
    }

    async findByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
        
        })
    }
    async findByTexto(texto: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
        
        })
    }

    async criarPostagem(postagem: Postagem): Promise<Postagem>{
        return await this.postagemRepository.save(postagem)
    }

    async alterarPostagem(postagem: Postagem): Promise<Postagem> {
        let buscarPostagem = await this.findById(postagem.id)

        if(!buscarPostagem || !postagem.id)
            throw new HttpException('Postagem Não Existe', HttpStatus.NOT_FOUND)

            return await this.postagemRepository.save(postagem)
    }


    async apagarPostagem(id: number): Promise<DeleteResult> {
        let buscarPostagem = await this.findById(id)

        if(!buscarPostagem)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)

        return await this.postagemRepository.delete(id)
    }
    
}