import Event from "src/common/events/event";
import Appointment from "../models/appointment";

export default class AppointmentRegistered extends Event
{
    public static eventName: string = 'appointment.registered';
    private appointment: Appointment;

    public constructor(appointment: Appointment)
    {
        super();
        this.appointment = appointment;
    }

    public getTopic(): string {
        return 'oncall';
    }

    public getName(): string {
        return 'appointment.registered';
    }

    public getAppointment(): Appointment
    {
        return this.appointment;
    }
}