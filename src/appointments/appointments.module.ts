import { Module } from '@nestjs/common';
import { SaveAppointmentsController } from './infrastructure/controllers/save.appointments.controller';
import { SaveAppointmentsService } from './application/services/save.appointments.service';
import AppointmentsRepository from './infrastructure/repositories/appointments.repository';

@Module({
  controllers: [SaveAppointmentsController],
  providers: [SaveAppointmentsService, AppointmentsRepository]
})
export class AppointmentsModule {}
