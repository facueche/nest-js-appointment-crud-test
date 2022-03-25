import { Controller, Get, Param, UseFilters } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/exceptions/HttpException.filter";
import Appointment from "src/appointments/domain/models/Appointment";
import AppointmentsRepository from "../repositories/Appointments.repository";

@Controller('appointments')
export default class FetchAppointmentByUuidController
{
    public constructor(
        private appointmentsRepository: AppointmentsRepository
    ) {}

    @Get(':uuid')
    @UseFilters(new HttpExceptionFilter())
    public async handle(@Param('uuid') uuid: string)
    {
        const appointment: Appointment = await this.appointmentsRepository.fetchByUuid(uuid);

        return appointment;
    }
}