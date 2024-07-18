import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class OrderItemDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  productId: number;
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  quantity: number;
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  price: number;
}
