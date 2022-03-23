import { Test, TestingModule } from '@nestjs/testing';
import { SaveAppointmentsService } from './save.appointments.service';

describe('SaveAppointmentsService', () => {
  let service: SaveAppointmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveAppointmentsService],
    }).compile();

    service = module.get<SaveAppointmentsService>(SaveAppointmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
