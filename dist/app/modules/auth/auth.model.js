"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: 0,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    profile_picture: {
        type: String
    }
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)('User', userSchema);
