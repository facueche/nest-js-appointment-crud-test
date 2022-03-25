import Appointment from "src/appointments/domain/models/appointment";
import AppointmentBuilderBaseService from "./appointment.builder.base.service";

export default class BuildAppointentService extends AppointmentBuilderBaseService
{
    public handle(): Appointment
    {
        return Appointment.make(this.uuid, this.patientName, this.patientName, this.scheduleAt);
    }
}