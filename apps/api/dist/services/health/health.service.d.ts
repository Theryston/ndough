import { PrismaService } from '../../prisma.service';
import { Health } from './types';
export declare class HealthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    execute(): Promise<Health>;
}
