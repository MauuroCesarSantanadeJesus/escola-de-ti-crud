import { PartialType } from '@nestjs/mapped-types';
import { CreateImagemDto } from './create-imagem.dto';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateImagemDto extends PartialType(CreateImagemDto) {
  @IsString()
  @IsNotEmpty()
  @IsNumber()
  resolution: string;
  @IsString()
  @IsNotEmpty()
  Format: string;
  @IsString()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
