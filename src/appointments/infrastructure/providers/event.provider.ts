import { Injectable } from "@nestjs/common";
import AppointmentRegistered from "src/appointments/domain/events/appointment.registered";
import EventEmitter from "src/common/events/event.emitter";
import StoreAppointment from "../listeners/store.appointment";

@Injectable()
export default class EventProvider
{
    private events = {
        [AppointmentRegistered.eventName]: [
            StoreAppointment.handle
        ]
    }

    public constructor()
    {
        for (const eventName in this.events) {
            this.events[eventName].forEach((eventHandler) => {
                EventEmitter.getInstance().on(eventName, eventHandler);
            })
        }
    }
}