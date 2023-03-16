import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateUserDTO } from './DTOs/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    getAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    getOneById(@Param() param) {
        return this.userService.findOneById(param.id);
    }

    @Post()
    postUser(@Body() createUserDTO: CreateUserDTO) {
        return this.userService.create(createUserDTO);
    }

    @Put(':id')
    update(@Param() param, @Body() createUserDTO: CreateUserDTO) {
        return this.userService.update(param.id, createUserDTO);
    }

    @Delete(':id')
    delete(@Param() param){
        return this.userService.remove(param.id);
    }

}
