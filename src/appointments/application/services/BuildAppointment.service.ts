import Appointment from "src/appointments/domain/models/Appointment";
import AppointmentBuilderBaseService from "./AppointmentBuilderBase.service";

export default class BuildAppointentService extends AppointmentBuilderBaseService
{
    public handle(): Appointment
    {
        return Appointment.make(this.uuid, this.patientName, this.patientName, this.scheduleAt);
    }
}