import { IsNotEmpty } from "class-validator";

export class CreateListItenDTO{
    
    @IsNotEmpty()
    list: {
        id: number
    };
    
    @IsNotEmpty()
    task: string;
    
    @IsNotEmpty()
    checked: number;
}