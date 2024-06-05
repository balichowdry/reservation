import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservationss.dto';

export class UpdateReservationssDto extends PartialType(CreateReservationDto) {}
