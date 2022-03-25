import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import AppointmentsRepository from '../repositories/Appointments.repository';
import EventManager from 'src/common/events/Event.manager';
import SaveAppointmentRequestValidator from '../validators/SaveAppointmentRequest.validator';
import SaveAppointmentsService from 'src/appointments/application/services/SaveAppointments.service';

@Controller('appointments')
export default class SaveAppointmentController
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

        EventManager.commitAll();

        return appointment;
    }
}
