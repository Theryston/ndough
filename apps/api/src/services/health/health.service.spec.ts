import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma.service';
import { HealthService } from './health.service';

describe('HealthService', () => {
  let service: HealthService;
  let prismaService: PrismaService;

  jest.spyOn(console, 'log').mockImplementation(() => ({}));
  jest.spyOn(console, 'error').mockImplementation(() => ({}));

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService, PrismaService],
    }).compile();

    service = module.get<HealthService>(HealthService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should inform that the database is down', async () => {
    jest
      .spyOn(prismaService, '$reconnect')
      .mockRejectedValueOnce(new Error('Database is down'));

    const result = await service.execute();

    expect(result).toEqual({ API: 'UP', DATABASE: 'DOWN' });
  });

  it('should inform that the database is up', async () => {
    jest.spyOn(prismaService, '$reconnect').mockResolvedValueOnce();

    const result = await service.execute();

    expect(result).toEqual({ API: 'UP', DATABASE: 'UP' });
  });
});
