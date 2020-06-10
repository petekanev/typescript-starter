import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
});