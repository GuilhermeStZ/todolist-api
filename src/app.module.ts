import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ListsModule } from './lists/lists.module';
import { ListEntity } from './lists/entities/list.entity';
import { ListItemEntity } from './lists/entities/listitem.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'todolist',
    entities: [UserEntity, ListEntity, ListItemEntity]
  }), UsersModule, ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
