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
        scheduleAt: Date
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
        const appointment = new Appointment(uuid, patientName, professionalName, scheduleAt);
        return appointment;
    }
}