import {
    IsNotEmpty,
    IsEmail,
    Matches,
} from "class-validator";

export class LoginUserDTO {

    @IsNotEmpty({ message: "O email não pode ser vazio" })
    @IsEmail({}, { message: "Email inválido" })
    email: string;

    @IsNotEmpty({ message: "A senha não pode ser vazia" })
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/, {
        message:
            "A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula e número"
    })
    password: string;
}
