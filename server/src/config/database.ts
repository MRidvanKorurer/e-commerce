import { Sequelize } from "sequelize";
import config from "./config";


const sequelize = new Sequelize(
  config.db.database || "eCommerceDb",
  config.db.user || "root",
  config.db.password || "",
  {
    host: config.db.host || "localhost",
    dialect: "mysql",
  }
);

export default sequelize;