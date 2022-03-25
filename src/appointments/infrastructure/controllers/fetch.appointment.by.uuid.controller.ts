import { Controller, Get, Param, UseFilters } from "@nestjs/common";
import Appointment from "src/appointments/domain/models/appointment";
import { HttpExceptionFilter } from "src/common/events/HttpException.filter";
import AppointmentsRepository from "../repositories/appointments.repository";

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