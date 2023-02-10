import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ArticleProvider } from './article-provider';
import { ArticleModel } from './types';

@Controller('articles')
export class ArticleControllerController {
  private readonly logger = new Logger(ArticleControllerController.name);
  constructor(private articleProvider: ArticleProvider) {}

  @Get()
  async getAll(
    @Query() queries: { startdate: string; enddate: string },
  ): Promise<ArticleModel[]> {
    try {
      return this.articleProvider.getAll(
        new Date(queries.startdate),
        new Date(queries.enddate),
      );
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }

  @Get('/test')
  testEndpoint() {
    return 'Endpoint running';
  }
}
