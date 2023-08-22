import multer, { Options } from 'multer'
import path from 'path'

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..","..","uploads"),
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  }),
  limits: {
    fileSize: 8 * 1024 * 1024 //8MB
  },
  fileFilter: (req, file, callback) => {
    const mimeType = ["image/png", "image/jpeg", "image/jpg"]

    if (!mimeType.includes(file.mimetype)) {
      return callback(null, false)
    }
    return callback(null, true)
  }
} as Options