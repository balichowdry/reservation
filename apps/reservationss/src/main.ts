import { NestFactory } from '@nestjs/core';
import { ReservationssModule } from './reservationss.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationssModule);
  await app.listen(3000);
}
bootstrap();
