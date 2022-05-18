import { Test, TestingModule } from '@nestjs/testing';
import { MosquesService } from './mosques.service';

describe('MosquesService', () => {
  let service: MosquesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MosquesService],
    }).compile();

    service = module.get<MosquesService>(MosquesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
