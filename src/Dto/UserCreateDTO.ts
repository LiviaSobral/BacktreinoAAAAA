import { IsNotEmpty, Matches, Min, Max, IsNumber, IsIn, IsOptional } from "class-validator";

export class CreateDonorDTO {
    @IsNotEmpty({ message: "Idade não pode ser nula" })
    @IsNumber({}, { message: "Idade deve ser um número" })
    @Min(18, { message: "Idade mínima é 18 anos" })
    @Max(69, { message: "Idade máxima é 69 anos" })
    age: number;

    @IsNotEmpty({ message: "Peso não pode ser nulo" })
    @IsNumber({}, { message: "Peso deve ser um número" })
    @Min(50, { message: "Peso mínimo é 50 kg" })
    weight: number;

    @IsNotEmpty({ message: "Tipo sanguíneo não pode ser nulo" })
    @IsIn(
        ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        { message: "Tipo sanguíneo inválido" }
    )
    @IsOptional()
    bloodType?: string;

    @IsNotEmpty({ message: "Data da última doação não pode ser nula" })
    @Matches(/^\d{2}\/\d{2}\/\d{4}$/, {
        message: "A data deve estar no formato dd/MM/yyyy"
    })
    lastDonation: string;
}