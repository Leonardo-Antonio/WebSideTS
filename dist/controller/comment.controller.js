"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const database_1 = require("../database");
class CommentController {
    static Commentary(req, res) {
        res.render("comment/comment");
        return res.status(200);
    }
    static SaveCommentary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            data.created_at = new Date();
            data.updated_at = new Date();
            const db = yield database_1.DB.GetConnection();
            const comments = yield db.query("INSERT INTO comments SET ?", data)
                .catch((err) => {
                res.status(400).json(err.message);
            }).then(() => {
                db.end();
                return res.redirect("/comment/posts");
            });
        });
    }
    static Posts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.DB.GetConnection();
            // @ts-ignore
            const posts = yield db.query("SELECT * FROM comments WHERE deleted_at IS NULL")
                .catch((err) => {
                return res.status(404).json(err.message);
            });
            const data = JSON.parse(JSON.stringify(posts[0]));
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].name);
            }
            res.render("comment/posts", { posts: data });
            return res.status(200);
        });
    }
}
exports.CommentController = CommentController;
