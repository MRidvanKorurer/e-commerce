"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Category_1 = __importDefault(require("./Category"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING(2500),
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE(),
        allowNull: false
    },
    discount: {
        type: sequelize_1.DataTypes.DOUBLE(),
        allowNull: false
    },
    images: {
        type: sequelize_1.DataTypes.STRING(2500),
        allowNull: false
    },
    attributes: {
        type: sequelize_1.DataTypes.STRING(2500),
        allowNull: false
    },
    brand: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: sequelize_1.DataTypes.DOUBLE(),
        allowNull: false
    },
    isFlash: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    salesCount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: "products",
    sequelize: database_1.default,
    timestamps: true
});
Product.belongsTo(Category_1.default, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
exports.default = Product;
