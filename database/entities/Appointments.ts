import { Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Appointments
{
    @Index()
    @PrimaryColumn({
        type: "uuid",
    })
    uuid: string;

    @Column({
        name: 'patient_name',
    })
    patientName: string;

    @Column({
        name: 'professional_name',
    })
    professionalName: string;

    @Column({
        type: 'datetime',
    })
    scheduleAt: string;

    @CreateDateColumn()
    created_at: Date;
        
    @UpdateDateColumn()
    updated_at: Date;
}