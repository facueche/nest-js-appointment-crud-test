import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

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