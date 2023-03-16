import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ListEntity } from "./list.entity";

@Entity('listitem')
export class ListItemEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ListEntity, (list) => list.listitens)
    list: ListEntity;

    @Column({ type: "varchar", length: 250 })
    task: string;

    @Column({ type: "tinyint" })
    checked: number;
}