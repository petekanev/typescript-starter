import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://auriaadmin:167UwUoo2qptTYMJ@cluster0-k3d2k.mongodb.net/auria?retryWrites=true&w=majority', { useNewUrlParser: true }),
    CategoryModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
