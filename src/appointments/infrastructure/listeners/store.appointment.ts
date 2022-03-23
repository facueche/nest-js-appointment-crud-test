import { Injectable } from "@nestjs/common";
import EventEmitter from "src/common/events/event.emitter";
import AppointmentRegistered from '../../domain/events/appointment.registered';

@Injectable()
export default class StoreAppointment
{
    public constructor()
    {
        EventEmitter.getInstance().on('appointment.registered', this.handle);
    }

    public handle(event: AppointmentRegistered)
    {
        console.log('ON LISTENER', event.getAppointment());
    }
}