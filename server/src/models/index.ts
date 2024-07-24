import Category from "./Category";

const models = [
    Category,
];

const initializeModels = async (sequelize: any) => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { models, initializeModels };