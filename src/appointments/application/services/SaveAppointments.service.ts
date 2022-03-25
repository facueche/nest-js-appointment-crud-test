import { Injectable } from '@nestjs/common';
import Appointment from '../../domain/models/Appointment';
import AppointmentBuilderBaseService from './AppointmentBuilderBase.service';

@Injectable()
export default class SaveAppointmentsService extends AppointmentBuilderBaseService
{
    public handle(): Appointment
    {
        return Appointment.register(this.uuid, this.patientName, this.professionalName, this.scheduleAt);
    }
}
