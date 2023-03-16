import { IsNotEmpty } from "class-validator";

export class UpdateListItenDTO{
    
    @IsNotEmpty()
    task: string;
    
    @IsNotEmpty()
    checked: number;
}