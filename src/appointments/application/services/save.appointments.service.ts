import { Injectable } from '@nestjs/common';
import Appointment from 'src/appointments/domain/models/appointment';
import AppointmentBuilderBaseService from './appointment.builder.base.service';

@Injectable()
export class SaveAppointmentsService extends AppointmentBuilderBaseService
{
    public handle(): Appointment
    {
        return Appointment.register(this.uuid, this.patientName, this.professionalName, this.scheduleAt);
    }
}
