import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Article, ArticleModel } from '../types';
import { Utilities } from '../utilities/utilities';

@Injectable()
export class Jobs {
  private readonly logger = new Logger(Jobs.name);

  constructor(
    private utilityService: Utilities,
    @InjectModel('Article') private articleModel: Model<ArticleModel>,
  ) {}

  @Cron(CronExpression.EVERY_WEEK)
  async updateArticleCollection() {
    try {
      this.logger.log('UPDATING ARTICLES COLLECTION');
      const articles: Article[] = await this.utilityService.getAritcles();
      await this.articleModel.insertMany(articles);
      this.logger.log('ARTICLES UPDATED SUCCESSFULLY');
    } catch (error) {
      console.log(error);
      this.logger.error(error);
    }
  }
}
