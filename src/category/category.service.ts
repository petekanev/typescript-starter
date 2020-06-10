import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from './category.dto';
import { Category } from './category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly model: Model<Category>,
  ) {}

  async create(item: CreateCategoryDto): Promise<Category> {
    const newCategory = await new this.model(item);
    return newCategory.save();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.model.findById(id).exec();
    return category;
  }

  async findMany(filter: any = {}): Promise<Category[]> {
    const categories = await this.model.find(filter).exec();
    return categories;
  }

  async update(id: string, update: CreateCategoryDto): Promise<Category> {
    const editedCategory = await this.model
      .findByIdAndUpdate(id, update, { new: true });
    return editedCategory;
  }

  async delete(id: string): Promise<Category>  {
    const deletedCategory = await this.model.findByIdAndRemove(id);

    return deletedCategory;
  }
}
