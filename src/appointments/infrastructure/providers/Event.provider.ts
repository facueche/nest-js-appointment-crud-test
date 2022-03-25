import { Injectable } from "@nestjs/common";
import AppointmentRegistered from "../../domain/events/AppointmentRegistered";
import EventEmitter from "../../../common/events/Event.emitter";
import StoreAppointment from "../listeners/StoreAppointment";

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