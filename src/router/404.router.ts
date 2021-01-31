import { Router } from "express"
import { NotFound } from "../controller/404.controller"

const router = Router()

router.use(NotFound.Main)

export default router
