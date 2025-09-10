import express from 'express'
import { originalUrl, urlShortener } from '../controller/urlController.js'
const router = express.Router();

router.post("/short",urlShortener);
router.get("/:urlId",originalUrl);

export default router