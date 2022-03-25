import { Injectable } from "@nestjs/common";
import Appointments from "database/entities/Appointments";
import BuildAppointentService from "src/appointments/application/services/build.appointment.service";
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
        const appointments = await Appointments.find();

        const appointmentBuilderService: BuildAppointentService = new BuildAppointentService();
        
        return appointments.map(appointment => 
            appointmentBuilderService
                .setUuid(appointment.uuid)
                .setPatientName(appointment.patientName)
                .setProfessionalName(appointment.professionalName)
                .setScheduleAt(new Date(appointment.scheduleAt))
                .handle()
        );
    }
}