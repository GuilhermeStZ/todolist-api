import { ListEntity } from "src/lists/entities/list.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 150 })
    name: string;

    @Column({ type: "varchar", length: 50 })
    login: string;

    @Column({ type: "longtext" })
    password: string;

    @OneToMany(() => ListEntity, (list) => list.user)
    lists: ListEntity
}