import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './DTOs/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private userEntityRepository: Repository<UserEntity>) { }

    findAll() {
        return this.userEntityRepository.find();
    }

    async findOneById(id: string) {
        const user = await this.userEntityRepository.findOneBy({ id: Number(id) });

        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }

    create(createUserDto: CreateUserDTO) {
        return this.userEntityRepository.save(createUserDto);
    }

    async update(id: string, createUserDto: CreateUserDTO) {

        const updateUser = await await this.userEntityRepository.findOneBy({ id: Number(id) });

        if (!updateUser) {
            throw new NotFoundException();
        }

        return this.userEntityRepository.save({
            id: Number(id),
            ...createUserDto
        });
    }

    remove(id: string) {
        return this.userEntityRepository.delete(Number(id));
    }
}
