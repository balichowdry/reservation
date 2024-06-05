import { Module } from '@nestjs/common';
import { ReservationssService } from './reservationss.service';
import { ReservationssController } from './reservationss.controller';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [DatabaseModule],
  controllers: [ReservationssController],
  providers: [ReservationssService],
})
export class ReservationssModule {}
