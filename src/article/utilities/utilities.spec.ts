import { Test, TestingModule } from '@nestjs/testing';
import { Utilities } from './utilities';

describe('Utilities', () => {
  let provider: Utilities;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Utilities],
    }).compile();

    provider = module.get<Utilities>(Utilities);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
