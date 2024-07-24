import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Category extends Model {
    public id!: string;
    public name!: string;
    public image!: string;
}

Category.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, 
    {
        tableName: 'category',
        sequelize,
        timestamps: true
    }
)

export default Category;