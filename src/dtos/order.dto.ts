import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Product } from 'src/schema/product.schema';

interface ProductOrder {
  product: Product;
  quantity: number;
}

export class OrderDto {
  @IsNotEmpty()
  @IsString()
  readonly owner: string;

  @IsNotEmpty()
  @IsString()
  readonly totalPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly product: ProductOrder[];
}
