"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), ".env")) });
exports.default = {
    database_url: process.env.DB_URL,
    port: process.env.PORT,
    salt: process.env.SALT,
    node_env: process.env.NODE_ENV,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    access_token_expires: process.env.ACCESS_TOKEN_EXPIRES,
    refresh_token_expires: process.env.REFRESH_TOKEN_EXPIRES,
    smtp_password: process.env.SMTP_PASSWORD,
    client_url: process.env.CLIENT_URL
};
