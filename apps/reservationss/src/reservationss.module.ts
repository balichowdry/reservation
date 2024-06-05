import { Module } from '@nestjs/common';
import { ReservationssController } from './reservationss.controller';
import { ReservationssService } from './reservationss.service';

@Module({
  imports: [ReservationssModule],
  controllers: [ReservationssController],
  providers: [ReservationssService],
})
export class ReservationssModule {}
