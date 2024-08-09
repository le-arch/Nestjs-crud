// src/products/dto/create-product.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
