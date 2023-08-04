import { Injectable } from '@nestjs/common';
import { CreateImagemDto } from './dto/create-imagem.dto';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { Imagem } from './entities/imagem.entity';
import { ImagemModule } from './imagem.module';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ImagemService {
  constructor(@InjectModel(Imagem.name) private ImagemModel: Model<Imagem>) {}
  create(createImagemDto: CreateImagemDto) {
    return this.ImagemModel.create(createImagemDto);
  }

  findAll() {
    return this.ImagemModel.find();
  }

  findOne(id: string) {
    return this.ImagemModel.findById(id);
  }

  update(id: string, updateImagemDto: UpdateImagemDto) {
    return this.ImagemModel.findByIdAndUpdate(id, updateImagemDto);
  }

  remove(id: string) {
    return this.ImagemModel.findByIdAndDelete(id);
  }
}
