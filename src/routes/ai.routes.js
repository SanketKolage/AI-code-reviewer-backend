import { Router } from 'express'; 
const router = Router();
import { getReview } from '../controllers/ai.controller.js';




 router.post("/get-review", getReview);

export default router
