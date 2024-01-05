import { Router } from "express";
import { SaveDetails } from "../Controllers/UserControllers.js";

const router = Router()

router.use("/save" , SaveDetails)

export default router