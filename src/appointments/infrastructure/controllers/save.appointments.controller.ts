import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SaveAppointmentsService } from 'src/appointments/application/services/save.appointments.service';
import AppointmentsRepository from '../repositories/appointments.repository';
import SaveAppointmentRequestValidator from '../validators/save.appointment.request.validator';

@Controller('appointments')
export class SaveAppointmentsController
{
    public constructor(
        private saveAppointmentService: SaveAppointmentsService,
        private appointmentsRepository: AppointmentsRepository
    ) {}

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public handle(@Body() request: SaveAppointmentRequestValidator)
    {
        const appointment = this.saveAppointmentService
            .setUuid(this.appointmentsRepository.generateUuid())
            .setPatientName(request.patientName)
            .setProfessionalName(request.professionalName)
            .setScheduleAt(request.scheduleAt)
            .handle();

        return appointment;
    }
}
