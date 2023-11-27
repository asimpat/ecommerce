import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Order extends Document {
  @Prop()
  owner: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'User';
  };

  @Prop()
  totalPrice: {
    type: number;
    default: 0;
  };

  @Prop()
  products: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'Product';
    },
  ];

  @Prop()
  quantity: {
    type: number;
    default: 0;
  };
}

export const OrderSchema = SchemaFactory.createForClass(Order);
