"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCookieToken = exports.verifyToken = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const catchAsync_1 = require("../utils/catchAsync");
const auth_model_1 = require("../modules/auth/auth.model");
const verifyToken = () => {
    return (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        // check if token is missing
        if (!token) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized");
        }
        // check if the token is valid
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.access_token_secret);
        const { email } = decoded;
        // checking if the user is exist
        const user = yield auth_model_1.User.findOne({ email: email });
        if (!user) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "This user is not found !!!");
        }
        req.user = Object.assign(Object.assign({}, decoded), { token,
            user });
        next();
    }));
};
exports.verifyToken = verifyToken;
const verifyCookieToken = () => {
    return (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.cookies.token;
        // check if token is missing
        if (!token) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized");
        }
        // check if the token is valid
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.access_token_secret);
        const { email } = decoded;
        // checking if the user is exist
        const user = yield auth_model_1.User.findOne({ email: email });
        if (!user) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "This user is not found !");
        }
        req.user = Object.assign(Object.assign({}, decoded), { token,
            user });
        next();
    }));
};
exports.verifyCookieToken = verifyCookieToken;
