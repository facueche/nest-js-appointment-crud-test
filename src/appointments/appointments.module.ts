import { Module } from '@nestjs/common';
import { SaveAppointmentsController } from './infrastructure/controllers/save.appointments.controller';
import { SaveAppointmentsService } from './application/services/save.appointments.service';
import AppointmentsRepository from './infrastructure/repositories/appointments.repository';
import EventProvider from './infrastructure/providers/event.provider';

@Module({
  controllers: [SaveAppointmentsController],
  providers: [SaveAppointmentsService, AppointmentsRepository, EventProvider]
})
export class AppointmentsModule {}
