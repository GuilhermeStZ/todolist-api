import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListItenDTO } from '../DTOs/create-itens.dto';
import { UpdateListItenDTO } from '../DTOs/update-itens.dto';
import { ListItemEntity } from '../entities/listitem.entity';

@Injectable()
export class ListitensService {

    constructor(@InjectRepository(ListItemEntity) private listItemRepository: Repository<ListItemEntity>) { }

    create(createListItenDTO: CreateListItenDTO) {
        return this.listItemRepository.save(createListItenDTO);
    }

    async update(id: string, updateListItenDTO: UpdateListItenDTO) {
        const item = await this.listItemRepository.findOneBy({id: Number(id)});

        if(!item){
            throw new NotFoundException();
        }

        return this.listItemRepository.save({
            id: Number(id),
            ...updateListItenDTO
        });
    }

    remove(id: string) {
        return this.listItemRepository.delete(Number(id));
    }
}
