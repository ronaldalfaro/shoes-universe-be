import { Controller, Get, Param } from '@nestjs/common';
import { PriceService } from './price.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('prices')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.priceService.findOne(id);
  }

  @Get()
  async all() {
    return await this.priceService.all();
  }

  @EventPattern('product_created')
  async productCreated(data: any) {
    return await this.priceService.create({
      id: data.id,
      price: data.price,
    });
  }

  @EventPattern('product_updated')
  async productUpdated(data: any) {
    return await this.priceService.update(data.id, data);
  }

  @EventPattern('product_deleted')
  async productDeleted(id: number) {
    await this.priceService.delete(id);
  }
}
