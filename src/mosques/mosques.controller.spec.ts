import { Test, TestingModule } from '@nestjs/testing';
import { MosquesController } from './mosques.controller';
import { MosquesService } from './mosques.service';

describe('MosquesController', () => {
  let controller: MosquesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MosquesController],
      providers: [MosquesService],
    }).compile();

    controller = module.get<MosquesController>(MosquesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
