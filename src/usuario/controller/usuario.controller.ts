import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth-guard";

import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";




@ApiTags('Usuario')
@UseGuards(JwtAuthGuard)
@Controller('/usuario')
@ApiBearerAuth()
@Controller('/usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    async create(@Body() usuario: Usuario): Promise<Usuario>{
    return this.usuarioService.create(usuario);
    }
    
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Put('/atualizar')
    async update(@Body()usuario: Usuario):  Promise<Usuario> {
         return this.usuarioService.update(usuario)
    }

}
