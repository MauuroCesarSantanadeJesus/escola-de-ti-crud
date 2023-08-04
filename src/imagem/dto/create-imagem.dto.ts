import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateImagemDto {
  @IsString()
  @IsNotEmpty()
  resolution: string;
  @IsString()
  @IsNotEmpty()
  Format: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
