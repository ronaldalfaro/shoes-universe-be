import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PriceDocument = Price & Document;

@Schema()
export class Price {
  @Prop()
  id: number;

  @Prop()
  price: number;
}

export const PriceSchema = SchemaFactory.createForClass(Price);
