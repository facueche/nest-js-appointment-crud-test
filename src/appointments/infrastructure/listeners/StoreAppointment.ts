import { Injectable } from "@nestjs/common";
import AppointmentRegistered from '../../domain/events/AppointmentRegistered';
import Appointments from "database/entities/Appointments";

@Injectable()
export default class StoreAppointment
{
    public static async handle(event: AppointmentRegistered)
    {
        const appointment = event.getAppointment();
        const appointmentEntity: Appointments = Appointments.create();

        appointmentEntity.uuid = appointment.getUuid();
        appointmentEntity.patientName = appointment.getPatientName();
        appointmentEntity.professionalName = appointment.getProfessionalName();
        appointmentEntity.scheduleAt = appointment.getScheduleAt().toLocaleString();

        await appointmentEntity.save();
    }
}