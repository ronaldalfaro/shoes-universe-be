import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Price, PriceDocument } from './price.model';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(Price.name) private readonly priceModel: Model<PriceDocument>,
  ) {}

  async all(): Promise<Price[]> {
    return this.priceModel.find().exec();
  }

  async create(data): Promise<Price> {
    return new this.priceModel(data).save();
  }

  async findOne(id: number): Promise<Price> {
    return this.priceModel.findOne({ id });
  }

  async update(id: number, data): Promise<any> {
    return this.priceModel.findOneAndUpdate({ id }, data);
  }

  async delete(id: number): Promise<void> {
    this.priceModel.deleteOne({ id }).exec();
  }
}
