import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export default class AppointmentsRepository
{
    public generateUuid(): string
    {
        return uuidv4();
    }
}