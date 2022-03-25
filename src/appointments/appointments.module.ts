import { Module } from '@nestjs/common';
import AppointmentsRepository from './infrastructure/repositories/Appointments.repository';
import EventProvider from './infrastructure/providers/Event.provider';
import FetchAppointmentByUuidController from './infrastructure/controllers/FetchAppointmentByUuid.controller';
import FetchAppointmentsController from './infrastructure/controllers/FetchAppointments.controller';
import SaveAppointmentController from './infrastructure/controllers/SaveAppointment.controller';
import SaveAppointmentsService from './application/services/SaveAppointments.service';

@Module({
  controllers: [SaveAppointmentController, FetchAppointmentsController, FetchAppointmentByUuidController],
  providers: [SaveAppointmentsService, AppointmentsRepository, EventProvider]
})
export class AppointmentsModule {}
