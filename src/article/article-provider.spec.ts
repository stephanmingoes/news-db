import { Test, TestingModule } from '@nestjs/testing';
import { ArticleProvider } from './article-provider';

describe('ArticleProvider', () => {
  let provider: ArticleProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleProvider],
    }).compile();

    provider = module.get<ArticleProvider>(ArticleProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
