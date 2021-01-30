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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const home_router_1 = __importDefault(require("./router/home.router"));
const comment_router_1 = __importDefault(require("./router/comment.router"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.setting();
        this.middlewares();
        this.routers();
    }
    setting() {
        this.app.set("port", this.port || process.env.PORT);
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.set("view engine", "pug");
    }
    middlewares() {
        this.app.use(morgan_1.default("dev"));
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routers() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
        this.app.use(home_router_1.default);
        this.app.use("/comment", comment_router_1.default);
    }
    Listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get("port"));
            console.log("########################################");
            console.log(`server on port ${this.app.get("port")}`);
            console.log(`http://localhost:${this.app.get("port")}`);
            console.log("########################################");
        });
    }
}
exports.App = App;
