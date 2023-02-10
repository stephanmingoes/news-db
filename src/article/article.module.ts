import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ArticleControllerController } from './article-controller.controller';
import { ArticleProvider } from './article-provider';
import { Jobs } from './jobs/jobs';
import { Utilities } from './utilities/utilities';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './schema/article.schema';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
  ],
  controllers: [ArticleControllerController],
  providers: [ArticleProvider, Jobs, Utilities],
})
export class ArticleModule {}
