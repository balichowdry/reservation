import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReservationsService } from './reservationss.service';
import { CreateReservationDto } from './dto/create-reservationss.dto';
import { UpdateReservationssDto } from './dto/update-reservationss.dto';

@Controller('reservationss')
export class ReservationssController {
  constructor(private readonly reservationssService: ReservationsService) {}

  @Post()
  create(@Body() createReservationssDto: CreateReservationDto) {
    return this.reservationssService.createReservation(createReservationssDto);
  }

  @Get()
  findAll() {
    return this.reservationssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationssService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReservationssDto: UpdateReservationssDto,
  ) {
    return this.reservationssService.update(id, updateReservationssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationssService.remove(id);
  }
}
