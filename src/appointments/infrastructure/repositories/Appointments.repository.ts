import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import Appointment from "../../domain/models/Appointment";
import AppointmentEntity from "../../../../database/entities/Appointments";
import AppointmentNotFoundException from "../../domain/exceptions/AppointmentNotFound.exception";
import BuildAppointentService from "../../application/services/BuildAppointment.service";

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