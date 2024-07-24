"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
const sequelize = new sequelize_1.Sequelize(config_1.default.db.database || "eCommerceDb", config_1.default.db.user || "root", config_1.default.db.password || "", {
    host: config_1.default.db.host || "localhost",
    dialect: "mysql",
});
exports.default = sequelize;
