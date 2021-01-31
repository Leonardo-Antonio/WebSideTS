import { Request, Response, NextFunction } from "express"

export class NotFound {
    static Main (req: Request, res: Response, next: NextFunction) {
        res.status(404).render("404")
    }
}
