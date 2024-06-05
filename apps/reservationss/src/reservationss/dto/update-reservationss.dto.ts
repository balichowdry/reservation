import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationssDto } from './create-reservationss.dto';

export class UpdateReservationssDto extends PartialType(CreateReservationssDto) {}
