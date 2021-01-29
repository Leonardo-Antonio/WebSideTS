import { Router } from "express"
import { CommentController } from "../controller/comment.controller"

const router: Router = Router()

router.route("/")
    .get(CommentController.Commentary)
    .post(CommentController.SaveCommentary)

router.get("/posts", CommentController.Posts)

export default router
