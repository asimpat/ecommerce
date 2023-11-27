import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsOptional()
  @IsString()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly name: string;

  @IsOptional()
  @MinLength(6)
  readonly password: number;
}
