import { Test, TestingModule } from '@nestjs/testing';
import { ReservationssController } from './reservationss.controller';
import { ReservationssService } from './reservationss.service';

describe('ReservationssController', () => {
  let reservationssController: ReservationssController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReservationssController],
      providers: [ReservationssService],
    }).compile();

    reservationssController = app.get<ReservationssController>(ReservationssController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reservationssController.getHello()).toBe('Hello World!');
    });
  });
});
