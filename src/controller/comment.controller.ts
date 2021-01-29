import {json, Request, Response} from "express";
import { CommentEntity } from "../entity/comment.entity";
import { DB } from "../database";

export class CommentController {
    static Commentary(req: Request, res: Response): Response {
        res.render("comment/comment")
        return res.status(200)
    }

    static async SaveCommentary(req: Request, res: Response) {
        let data: CommentEntity = req.body
        data.created_at = new Date()
        data.updated_at = new Date()
        const db = await DB.GetConnection()
        const comments = await db.query("INSERT INTO comments SET ?", data)
            .catch((err: Error) => {
                res.status(400).json(err.message)
            }).then(() => {
                db.end()
                return res.redirect("/comment/posts")
            })
    }

    static async Posts(req: Request, res: Response): Promise<Response> {
        const db = await DB.GetConnection()

        // @ts-ignore
        const posts: Array<CommentEntity> = await db.query("SELECT * FROM comments WHERE deleted_at IS NULL")
            .catch((err: Error) => {
                return res.status(404).json(err.message)
            })
        const data: Array<CommentEntity> = JSON.parse(JSON.stringify(posts[0]))
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name)
        }
        res.render("comment/posts", { posts: data })
        return res.status(200)
    }
}
