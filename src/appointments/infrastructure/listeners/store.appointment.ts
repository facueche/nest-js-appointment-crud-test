import { Injectable } from "@nestjs/common";
import Appointments from "database/entities/Appointments";
import EventEmitter from "src/common/events/event.emitter";
import AppointmentRegistered from '../../domain/events/appointment.registered';

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