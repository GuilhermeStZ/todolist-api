import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "src/users/entities/user.entity";
import { ListItemEntity } from "./listitem.entity";

@Entity('list')
export class ListEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    title: string;

    @Column({ type: "longtext" })
    description: string;

    @Column({ type: "date" })
    begin_date: Date;

    @Column({ type: "date" })
    end_date: Date;

    @ManyToOne(() => UserEntity, (user) => user.lists)
    user: UserEntity;

    @OneToMany(() => ListItemEntity, (listitem) => listitem.list, {
        cascade: ['insert']
    })
    listitens: ListItemEntity[];
}