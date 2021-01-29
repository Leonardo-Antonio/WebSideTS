"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
class HomeController {
    static Index(req, res) {
        res.render("home/index");
        return res.status(200);
    }
}
exports.HomeController = HomeController;
