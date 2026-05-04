import { Router } from "express";
import { subscribeToNewsletter } from "../controllers/newsletterController.js";

const router = Router();

router.post("/api/subscribe", subscribeToNewsletter);

export default router;