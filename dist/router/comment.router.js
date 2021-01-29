"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("../controller/comment.controller");
const router = express_1.Router();
router.route("/")
    .get(comment_controller_1.CommentController.Commentary)
    .post(comment_controller_1.CommentController.SaveCommentary);
router.get("/posts", comment_controller_1.CommentController.Posts);
exports.default = router;
