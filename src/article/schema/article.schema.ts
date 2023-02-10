import mongoose from 'mongoose';
import { ArticleModel } from '../types';

export const ArticleSchema = new mongoose.Schema<ArticleModel>({
  title: String,
  link: String,
  source: String,
  description: String,
  thumbnail: String,
  date_parsed: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
