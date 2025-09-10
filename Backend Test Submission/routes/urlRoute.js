import express from 'express'
import { getAllurl, originalUrl, urlShortener } from '../controller/urlController.js'
const router = express.Router();

router.post("/short",urlShortener);
router.get("/:urlId",originalUrl);
router.get('/',getAllurl)

export default router