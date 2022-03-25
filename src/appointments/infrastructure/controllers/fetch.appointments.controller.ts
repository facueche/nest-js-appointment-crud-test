import { Controller, Get } from "@nestjs/common";
import Appointment from "src/appointments/domain/models/appointment";
import AppointmentsRepository from "../repositories/appointments.repository";

@Controller('appointments')
export default class FetchAppointmentsController
{
    public constructor(
        private appointmentsRepository: AppointmentsRepository
    ) {}

    @Get()
    public async handle()
    {
        const appointments: Appointment[] = await this.appointmentsRepository.fetchAll();

        return appointments;
    }
}