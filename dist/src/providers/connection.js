"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class Connection {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
}
const connection = new Connection();
exports.default = connection;
//# sourceMappingURL=connection.js.map