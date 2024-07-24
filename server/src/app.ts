import express, {Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initializeModels } from "./models";
import sequelize from "./config/database";
import { swaggerSpec, swaggerUi } from "./swagger";
import indexRoute from "./routes/index";



dotenv.config();


const app: Express = express();
const port: any = process.env.PORT || 3000;


// midllewares
app.use(express.json());
app.use(cors());


// routing
app.use("/api", indexRoute);

// Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const startServer = async () => {
    try {
        await initializeModels(sequelize);
        console.log("Database synchronized");

        app.listen(port, () => {
            console.log(`Server is running on port ${port} ⚡`);
        })
    } catch (error) {
        console.log('server error', error);
    }
}

startServer();