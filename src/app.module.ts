import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    ArticleModule,
    MongooseModule.forRoot(process.env.DATABASE_URL as string),
  ],
})
export class AppModule {}
