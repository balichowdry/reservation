import { Controller, Get } from '@nestjs/common';
import { ReservationssService } from './reservationss.service';

@Controller()
export class ReservationssController {
  constructor(private readonly reservationssService: ReservationssService) {}

  @Get()
  getHello(): string {
    return this.reservationssService.getHello();
  }
}
