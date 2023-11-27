import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// interface Address {
//   add1: string;
//   add2: string;
//   city: string;
//   state: string;
//   country: string;
//   zip: number;
// }

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsNumber()
  readonly seller: string;

  @IsNotEmpty()
  @IsString()
  readonly state: string;
}
