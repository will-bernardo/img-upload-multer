import { Router } from "express";
import { PostController } from "./controllers/PostController";
import uploadsConfig from './config/multer'
import multer from "multer";

const upload = multer(uploadsConfig)

const router = Router()

router.post("/", upload.array("images"), new PostController().store)

export { router }