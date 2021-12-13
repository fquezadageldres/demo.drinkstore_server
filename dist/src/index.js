"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const { API_PORT } = process.env;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)((tokens, req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms',
    ].join(' ');
}));
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(API_PORT, () => {
    console.log(`Api up and running at: http://localhost:${API_PORT}`);
});
//# sourceMappingURL=index.js.map