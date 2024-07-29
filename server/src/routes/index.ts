import express from "express";
import categoryRoute from "./categoryRoutes";
import productRoute from "./productRoutes";

const router = express.Router();

router.use("/categories", categoryRoute);
router.use("/products", productRoute);

export default router;