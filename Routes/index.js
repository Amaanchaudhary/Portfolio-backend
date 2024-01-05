import { Router } from "express";
import UserRouters from './UserRoutes.js'

const router = Router()

router.use("/user" , UserRouters)

export default router