import { Injectable } from "@nestjs/common";
import AppointmentEntity from "database/entities/Appointments";
import BuildAppointentService from "src/appointments/application/services/build.appointment.service";
import AppointmentNotFoundException from "src/appointments/domain/exceptions/appointment.not.found.exception";
import Appointment from "src/appointments/domain/models/appointment";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export default class AppointmentsRepository
{
    public generateUuid(): string
    {
        return uuidv4();
    }

    public async fetchAll(): Promise<Appointment[]>
    {
        const appointments = await AppointmentEntity.find();

        return appointments.map((appointment: AppointmentEntity) => this.buildAppointment(appointment));
    }

    public async fetchByUuid(uuid: string): Promise<Appointment>
    {
        const appointment = await AppointmentEntity.findOne({ where: { uuid } });

        if (appointment === undefined)
            throw new AppointmentNotFoundException();

        return this.buildAppointment(appointment);
    }

    private buildAppointment(appointment: AppointmentEntity)
    {
        const appointmentBuilderService: BuildAppointentService = new BuildAppointentService();

        return appointmentBuilderService
            .setUuid(appointment.uuid)
            .setPatientName(appointment.patientName)
            .setProfessionalName(appointment.professionalName)
            .setScheduleAt(new Date(appointment.scheduleAt))
            .handle()
    }
}