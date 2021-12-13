import { Prisma, PrismaClient } from '@prisma/client';
export interface IConnection {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
}
declare class Connection implements IConnection {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
    constructor();
}
declare const connection: Connection;
export default connection;
