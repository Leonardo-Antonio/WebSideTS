import express, { Application } from "express"
import morgan from "morgan";
import path from "path";
import HomeRouter from "./router/home.router"
import CommentRouter from "./router/comment.router"

export class App {
    private app: Application

    constructor(private port?: number) {
        this.app = express()
        this.setting()
        this.middlewares()
        this.routers()
    }

    private setting(){
        this.app.set("port", this.port || process.env.PORT)
        this.app.set("views", path.join(__dirname, "views"))
        this.app.set("view engine", "ejs")
    }

    private middlewares(){
        this.app.use(morgan("dev"))
        this.app.use(express.urlencoded({extended: false}))
    }

    private routers(){
        this.app.use(express.static(path.join(__dirname, "public")))
        this.app.use(HomeRouter)
        this.app.use("/comment", CommentRouter)
    }

    public async Listen(){
        await this.app.listen(this.app.get("port"))
        console.log("########################################")
        console.log(`server on port ${this.app.get("port")}`)
        console.log(`http://localhost:${this.app.get("port")}`)
        console.log("########################################")
    }
}
