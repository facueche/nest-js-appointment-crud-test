import { Test, TestingModule } from '@nestjs/testing';
import { SaveAppointmentsController } from './save.appointments.controller';

describe('SaveAppointmentsController', () => {
  let controller: SaveAppointmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaveAppointmentsController],
    }).compile();

    controller = module.get<SaveAppointmentsController>(SaveAppointmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
