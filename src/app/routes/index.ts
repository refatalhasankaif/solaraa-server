import { Router } from "express";
import { aiRoutes } from "../module/ai/ai.route";

const router = Router()

router.use('/ai', aiRoutes)

export const IndexRoutes = router;