import { Controller, Get } from '@nestjs/common';
import { HealthService } from './services/health/health.service';

@Controller()
export class AppController {
  constructor(private readonly healthService: HealthService) {}

  @Get('health')
  getHome() {
    return this.healthService.execute();
  }
}
