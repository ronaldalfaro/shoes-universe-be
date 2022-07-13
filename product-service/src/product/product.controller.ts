import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}
  @Get()
  async all() {
    return this.productService.all();
  }

  @Post()
  async create(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('image') image: string,
    @Body('price') price: number,
  ) {
    const product = await this.productService.create({
      title,
      description,
      image,
    });
    const product_price = { id: product.id, price };
    this.client.emit('product_created', product_price);
    return product;
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const productPrice = await this.productService.getProductPrice(id);
    const product = await this.productService.get(id);
    return {
      id: product.id,
      title: product.title,
      descrption: product.description,
      image: product.image,
      price: productPrice,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('image') image: string,
    @Body('price') price: number,
  ) {
    await this.productService.update(id, {
      title,
      description,
      image,
    });
    const product = await this.productService.get(id);
    const product_price = { id: product.id, price: price };
    this.client.emit('product_updated', product_price);

    return product;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const operation = await this.productService.delete(id);
    this.client.emit('product_deleted', id);

    return operation;
  }
}
