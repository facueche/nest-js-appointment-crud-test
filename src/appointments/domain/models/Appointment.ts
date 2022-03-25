import AppointmentRegistered from "../events/AppointmentRegistered";
import EventManager from "src/common/events/Event.manager";

export default class Appointment
{
    private uuid: string;
    private patientName: string;
    private professionalName: string;
    private scheduleAt: Date;

    private constructor (
        uuid: string,
        patientName: string,
        professionalName: string,
        scheduleAt: Date,
    ) {
        this.uuid = uuid;
        this.patientName = patientName;
        this.professionalName = professionalName;
        this.scheduleAt = scheduleAt;
    }

    public static register(
        uuid: string,
        patientName: string,
        professionalName: string,
        scheduleAt: Date
    ): Appointment
    {
        const appointment = Appointment.make(uuid, patientName, professionalName, scheduleAt);
        
        EventManager.dispatch(new AppointmentRegistered(appointment));

        return appointment;
    }

    public static make(
        uuid: string,
        patientName: string,
        professionalName: string,
        scheduleAt: Date
    ): Appointment
    {
        const appointment = new Appointment(uuid, patientName, professionalName, scheduleAt);

        return appointment;
    }

    public getUuid(): string
    {
        return this.uuid;
    }

    public getPatientName(): string
    {
        return this.patientName;
    }

    public getProfessionalName(): string
    {
        return this.professionalName;
    }

    public getScheduleAt(): Date
    {
        return this.scheduleAt;
    }
}