import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { HealthService } from './services/health/health.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HealthService, PrismaService],
})
export class AppModule {}
