import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class PostController {
  async store(req: Request, res: Response) {
    const { description } = req.body
    const requestImages = req.files as Express.Multer.File[]
    const images = requestImages.map(image => {
      return {
        path: image.filename,
      }
    })


    const post = await prisma.post.create({
      data: {
        description: description,
        Image: {
          create: images
        }
      },
      select: {
        description: true,
        Image: true
      }
    })

    console.log(post)
    return res.json(post.Image[0].path)
    
  }
}