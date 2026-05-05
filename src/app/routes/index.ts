import { Router } from "express";
import { aiRoutes } from "../module/ai/ai.route";
import { AuthRoutes } from "../module/auth/auth.route";

const router = Router()

router.use('/ai', aiRoutes)
router.use('/auth', AuthRoutes)

export const IndexRoutes = router;