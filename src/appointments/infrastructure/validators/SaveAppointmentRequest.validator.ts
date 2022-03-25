import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";

export default class SaveAppointmentRequestValidator
{
    @IsNotEmpty()
    @IsString()
    patientName: string;

    @IsNotEmpty()
    @IsString()
    professionalName: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    scheduleAt: Date;
}