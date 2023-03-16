import { IsNotEmpty } from "class-validator";

export class CreateUserDTO {
    
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    login: string;
    
    @IsNotEmpty()
    password: string;
}