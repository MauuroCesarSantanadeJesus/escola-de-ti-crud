import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Imagem, ImagemSchema } from './entities/imagem.entity';
import { ImagemController } from './imagem.controller';
import { ImagemService } from './imagem.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Imagem.name, schema: ImagemSchema }]),
  ],
  controllers: [ImagemController],
  providers: [ImagemService],
})
export class ImagemModule {}
