import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsEmail,
    Matches,
    IsIn,
    IsNumber,
    Min,
    Max,
    IsDateString,
    Length
} from "class-validator";

export class UpdateUserDTO {

    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    @IsString({ message: "O nome deve ser uma string" })
    @Length(3, 120, { message: "O nome deve ter entre 3 e 120 caracteres" })
    name: string;

    @IsNotEmpty({ message: "O telefone não pode ser vazio" })
    @Matches(/^\+?\d{10,15}$/, {
        message: "Telefone inválido (use apenas números, com DDD; ex: 11997881122)"
    })
    phone: string;

    @IsNotEmpty({ message: "O email não pode ser vazio" })
    @IsEmail({}, { message: "Email inválido" })
    email: string;

    @IsOptional()
    @IsIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
        message: "Tipo sanguíneo inválido"
    })
    bloodType?: string;

    @IsNotEmpty({ message: "O peso não pode ser vazio" })
    @IsNumber({}, { message: "Peso deve ser um número" })
    @Min(50, { message: "Peso mínimo é 50 kg" })
    @Max(300, { message: "Peso máximo é 300 kg" })
    weight: number;

    @IsNotEmpty({ message: "A idade não pode ser vazia" })
    @IsNumber({}, { message: "Idade deve ser um número" })
    @Min(18, { message: "Idade mínima é 18 anos" })
    @Max(120, { message: "Idade máxima é 120 anos" })
    age: number;

    @IsNotEmpty({ message: "A data da última doação é obrigatória" })
    @IsDateString({}, { message: "A data deve estar no formato ISO: YYYY-MM-DD" })
    lastDonation: Date;

    @IsNotEmpty({ message: "A senha não pode ser vazia" })
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/, {
        message:
            "A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula e número"
    })
    password: string;
}
