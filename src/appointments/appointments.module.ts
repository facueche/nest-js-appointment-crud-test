import { Module } from '@nestjs/common';
import { SaveAppointmentsController } from './infrastructure/controllers/save.appointments.controller';
import { SaveAppointmentsService } from './application/services/save.appointments.service';
import AppointmentsRepository from './infrastructure/repositories/appointments.repository';
import EventProvider from './infrastructure/providers/event.provider';
import FetchAppointmentsController from './infrastructure/controllers/fetch.appointments.controller';
import FetchAppointmentByUuidController from './infrastructure/controllers/fetch.appointment.by.uuid.controller';

@Module({
  controllers: [SaveAppointmentsController, FetchAppointmentsController, FetchAppointmentByUuidController],
  providers: [SaveAppointmentsService, AppointmentsRepository, EventProvider]
})
export class AppointmentsModule {}
