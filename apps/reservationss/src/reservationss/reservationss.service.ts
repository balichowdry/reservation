import { Injectable } from '@nestjs/common';
import { CreateReservationssDto } from './dto/create-reservationss.dto';
import { UpdateReservationssDto } from './dto/update-reservationss.dto';

@Injectable()
export class ReservationssService {
  create(createReservationssDto: CreateReservationssDto) {
    return 'This action adds a new reservationss';
  }

  findAll() {
    return `This action returns all reservationss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservationss`;
  }

  update(id: number, updateReservationssDto: UpdateReservationssDto) {
    return `This action updates a #${id} reservationss`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservationss`;
  }
}
