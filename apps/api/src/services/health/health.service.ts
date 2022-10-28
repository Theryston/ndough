import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Health } from './types';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<Health> {
    const API = 'UP';
    let DATABASE: Health['DATABASE'] = 'UP';

    try {
      console.log(`[HealthService] Checking database connection`);
      await this.prisma.$reconnect();
    } catch (error) {
      console.error(
        `[HealthService] Error while reconnecting to database | Details: ${JSON.stringify(
          error,
        )}`,
      );
      DATABASE = 'DOWN';
    }

    return { API, DATABASE };
  }
}
