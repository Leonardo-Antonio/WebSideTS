import { Request, Response } from "express"

export class HomeController {
    static Index(req: Request, res: Response): Response{
        res.render("home/index")
        return res.status(200)
    }
}
