import { IsNotEmpty } from "class-validator";
import { CreateListItenDTO } from "./create-itens.dto";

export class CreateListDTO {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    begin_date: Date;

    @IsNotEmpty()
    end_date: Date;

    @IsNotEmpty()
    user: {
        id: number;
    }

    listitens: CreateListItenDTO[];
}