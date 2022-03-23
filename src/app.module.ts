import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentsModule } from './appointments/appointments.module';
import DatabaseConfig from '../config/database';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AppointmentsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConfig,
    })
  ],
})
export class AppModule {}
