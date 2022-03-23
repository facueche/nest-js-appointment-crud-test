import { Injectable } from '@nestjs/common';
import Appointment from 'src/appointments/domain/models/appointment';

@Injectable()
export class SaveAppointmentsService
{
    private uuid: string;
    private patientName: string;
    private professionalName: string;
    private scheduleAt: Date;

    public setUuid(uuid: string): this
    {
        this.uuid = uuid;
        return this;
    }

    public setPatientName(patientName: string): this
    {
        this.patientName = patientName;
        return this;
    }

    public setProfessionalName(professionalName: string): this
    {
        this.professionalName = professionalName;
        return this;
    }

    public setScheduleAt(scheduleAt: Date): this
    {
        this.scheduleAt = scheduleAt;
        return this;
    }

    public handle(): Appointment
    {
        return Appointment.register(this.uuid, this.patientName, this.professionalName, this.scheduleAt);
    }
}
