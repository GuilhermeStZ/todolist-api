import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDTO } from './DTOs/create-list.dto';
import { ListEntity } from './entities/list.entity';

@Injectable()
export class ListsService {

    constructor(@InjectRepository(ListEntity) private listRepository: Repository<ListEntity>) { }

    findAll() {
        return this.listRepository.find();
    }

    findByUserId(userid: number) {
        return this.listRepository.findOne({where: {
            user: {id: userid}
        }});
    }

    async findOneById(id: string) {

        const list = await this.listRepository.findOne({ where: { id: Number(id) }, relations: ['listitens'] });

        if (!list) {
            throw new NotFoundException();
        }

        return list;
    }

    create(createListDto: CreateListDTO) {
        return this.listRepository.save(createListDto);
    }

    async update(id: string, createListDto: CreateListDTO) {
        const listUpdate = await this.listRepository.findOneBy({ id: Number(id) });

        if (!listUpdate) {
            throw new NotFoundException();
        }

        return this.listRepository.save({
            id: Number(id),
            ...createListDto
        });
    }

    remove(id: string) {
        return this.listRepository.delete(Number(id));
    }
}
