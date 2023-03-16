import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateListDTO } from './DTOs/create-list.dto';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {

    constructor(private listsService: ListsService) { }

    @Get()
    getAll() {
        return this.listsService.findAll();
    }

    @Get(':id')
    getOneById(@Param() param) {
        return this.listsService.findOneById(param.id);
    }

    @Post()
    postList(@Body() body: CreateListDTO) {
        return this.listsService.create(body);
    }

    @Put(':id')
    update(@Param() param, @Body() body: CreateListDTO) {
        return this.listsService.update(param.id, body);
    }

    @Delete(':id')
    delete(@Param() param) {
        return this.listsService.remove(param.id);
    }
}
