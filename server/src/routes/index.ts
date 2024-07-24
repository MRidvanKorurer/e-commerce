import express from "express";
import categoryRoute from "./categoryRoutes";

const router = express.Router();

router.use("/categories", categoryRoute);

export default router;