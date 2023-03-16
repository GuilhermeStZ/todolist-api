import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListEntity } from './entities/list.entity';
import { ListItemEntity } from './entities/listitem.entity';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { ListitensService } from './listitens/listitens.service';
import { ListitensController } from './listitens/listitens.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ListEntity, ListItemEntity])],
  controllers: [ListsController, ListitensController],
  providers: [ListsService, ListitensService]
})
export class ListsModule {}
