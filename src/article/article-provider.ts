import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticleModel } from './types';

@Injectable()
export class ArticleProvider {
  constructor(
    @InjectModel('Article') private articleModel: Model<ArticleModel>,
  ) {}
  async getAll(
    startdate?: Date | string | number,
    enddate?: Date | string | number,
  ): Promise<ArticleModel[]> {
    try {
      if (
        !startdate ||
        !enddate ||
        startdate == 'Invalid Date' ||
        enddate == 'Invalid Date'
      )
        return this.articleModel.find();
      const data = await this.articleModel.find({
        createdAt: {
          $gte: startdate,
          $lte: enddate,
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  }
}
