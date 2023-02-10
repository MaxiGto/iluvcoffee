import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeeRatingModule],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
