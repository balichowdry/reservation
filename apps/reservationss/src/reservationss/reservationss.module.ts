import { Module } from '@nestjs/common';
import { ReservationsService } from './reservationss.service';
import { ReservationssController } from './reservationss.controller';
import { DatabaseModule } from '@app/common';
import { ReservationsRepository } from './reservationss.repository';
import {
  ReservationDocument,
  ReservationSchema,
} from './entities/reservationss.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [ReservationssController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
