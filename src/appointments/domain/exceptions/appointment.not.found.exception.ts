import { HttpException, HttpStatus } from "@nestjs/common";

export default class AppointmentNotFoundException extends HttpException
{
    public constructor()
    {
        const MESSAGE: string = "Appointment not found";
        const  HTTP_CODE: number = HttpStatus.NOT_FOUND;

        super(MESSAGE, HTTP_CODE);
    }
}