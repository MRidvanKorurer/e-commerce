import {Model, DataTypes} from "sequelize";
import sequelize from "../config/database";
import Category from "./Category";
import { UUIDV4 } from "sequelize";

class Product extends Model {
    public id!: string;
    public categoryId!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public discount!: number;
    public images!:  string;
    public attributes!: string;
    public brand!: string;
    public stock!: number;
    public rating!: number;
    public isFlash!: boolean;
    public salesCount!: number
}

Product.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(2500),
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE(),
            allowNull: false
        },
        discount: {
            type: DataTypes.DOUBLE(),
            allowNull: false
        },
        images: {
            type: DataTypes.STRING(2500),
            allowNull: false
        },
        attributes: {
            type: DataTypes.STRING(2500),
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.DOUBLE(),
            allowNull: false
        },
        isFlash: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        salesCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }
    ,
    {
        tableName: "products",
        sequelize,
        timestamps: true
    }
)


Product.belongsTo(Category, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});



export default Product;