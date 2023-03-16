import { Controller } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { CreateListItenDTO } from '../DTOs/create-itens.dto';
import { UpdateListItenDTO } from '../DTOs/update-itens.dto';
import { ListitensService } from './listitens.service';

@Controller('listitens')
export class ListitensController {

    constructor(private listitensService: ListitensService){}

    @Post()
    postListItem(@Body() body: CreateListItenDTO){
        return this.listitensService.create(body);
    }

    @Put(':id')
    update(@Param() param, @Body() body: UpdateListItenDTO ){
        return this.listitensService.update(param.id, body);
    }

    @Delete(':id')
    delete(@Param() param){
        return this.listitensService.remove(param.id);
    }
}
