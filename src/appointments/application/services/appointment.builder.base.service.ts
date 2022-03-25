import Appointment from "src/appointments/domain/models/appointment";

export default abstract class AppointmentBuilderBaseService
{
    protected uuid: string;
    protected patientName: string;
    protected professionalName: string;
    protected scheduleAt: Date;

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

    public abstract handle(): Appointment;
}