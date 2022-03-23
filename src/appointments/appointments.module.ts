import { Module } from '@nestjs/common';
import { SaveAppointmentsController } from './infrastructure/controllers/save.appointments.controller';
import { SaveAppointmentsService } from './application/services/save.appointments.service';
import AppointmentsRepository from './infrastructure/repositories/appointments.repository';
import StoreAppointment from './infrastructure/listeners/store.appointment';

@Module({
  controllers: [SaveAppointmentsController],
  providers: [SaveAppointmentsService, AppointmentsRepository, StoreAppointment]
})
export class AppointmentsModule {}
