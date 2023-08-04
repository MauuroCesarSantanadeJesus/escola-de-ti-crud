import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Imagem {
  @Prop()
  resolution: string;
  @Prop()
  Format: string;
  @Prop()
  quantity: number;
}
export const ImagemSchema = SchemaFactory.createForClass(Imagem);
