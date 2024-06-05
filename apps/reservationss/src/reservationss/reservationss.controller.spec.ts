import { Test, TestingModule } from '@nestjs/testing';
import { ReservationssController } from './reservationss.controller';
import { ReservationssService } from './reservationss.service';

describe('ReservationssController', () => {
  let controller: ReservationssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationssController],
      providers: [ReservationssService],
    }).compile();

    controller = module.get<ReservationssController>(ReservationssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
