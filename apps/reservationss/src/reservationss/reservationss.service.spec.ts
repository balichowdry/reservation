import { Test, TestingModule } from '@nestjs/testing';
import { ReservationssService } from './reservationss.service';

describe('ReservationssService', () => {
  let service: ReservationssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationssService],
    }).compile();

    service = module.get<ReservationssService>(ReservationssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
