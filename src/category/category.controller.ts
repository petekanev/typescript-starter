/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Post, Param, Body, Delete, Render } from '@nestjs/common';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @Render('categories/list')
  async findAll() {
    // list all stored categories
    return { beep: 'returns all stored categories' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return 'returns a single category > ' + id;
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<any> {
    return 'creates, but not yet! > ' + JSON.stringify(createCategoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return id;
  }
}
