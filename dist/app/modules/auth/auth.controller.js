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
exports.AuthControllers = void 0;
const auth_services_1 = require("./auth.services");
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const signup = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.createUserIntoDB(req.body);
    const data = Object.assign(result);
    delete data.password;
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.CREATED,
        message: "User registered successfully",
        data: data,
    });
}));
const changePassword = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.changeUserPasswordIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Password changed successfully",
        data: result,
    });
}));
const forgetPassword = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.sendLinkToEmail(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Lint set to your email to change password",
        data: result,
    });
}));
const resetPassword = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useremail = req.user.email;
    const result = yield auth_services_1.AuthServices.setForgottenPasswordIntoDB(useremail, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Password changed successfully",
        data: result,
    });
}));
const login = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.loginAuth(req.body);
    const { token, user, refreshToken } = result;
    res.cookie("token", token, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 90 * 24 * 60 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 90 * 24 * 60 * 60 * 1000,
    });
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "User Logged In successfully",
        data: { user, token, refreshToken },
    });
}));
const getMyProfile = (req, res) => {
    // console.log(req.user)
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Profile Information Retrieved Successfully",
        data: req.user.user,
    });
};
const updateMyProfile = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.updateMyProfileIntoDb(req.user.user._id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Profile Updated successfully",
        data: result,
    });
}));
const logout = () => (req, res) => {
    res.clearCookie("token", {
        secure: true,
        httpOnly: true,
        sameSite: "none",
    });
    res.clearCookie("refreshToken", {
        secure: true,
        httpOnly: true,
        sameSite: "none",
    });
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "User Logged out successfully",
        data: {},
    });
};
const checkLogin = () => (req, res) => {
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "User is Logged In",
        data: req.user,
    });
};
const refreshToken = () => (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    const decoded = jsonwebtoken_1.default.verify(refreshToken, config_1.default.refresh_token_secret);
    if (!decoded) {
        (0, sendResponse_1.sendResponse)(res, {
            status: http_status_codes_1.StatusCodes.FORBIDDEN,
            message: "Accress token has been sent successfully",
            data: null,
        });
    }
    const { email, role } = decoded;
    const jwtPayload = {
        role,
        email,
    };
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.access_token_secret, {
        expiresIn: "1d",
    });
    res.cookie("token", token, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 90 * 24 * 60 * 60 * 1000,
    });
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Acceess token has been sent successfully",
        data: { token },
    });
};
exports.AuthControllers = {
    signup,
    login,
    logout,
    changePassword,
    forgetPassword,
    resetPassword,
    refreshToken,
    getMyProfile,
    updateMyProfile,
    checkLogin,
};
