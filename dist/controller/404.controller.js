"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
class NotFound {
    static Main(req, res, next) {
        res.status(404).render("404");
    }
}
exports.NotFound = NotFound;
