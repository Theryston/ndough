import { HealthService } from './services/health/health.service';
export declare class AppController {
    private readonly healthService;
    constructor(healthService: HealthService);
    getHome(): Promise<import("./services/health/types").Health>;
}
