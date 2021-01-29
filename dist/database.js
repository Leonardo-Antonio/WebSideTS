"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const promise_1 = require("mysql2/promise");
class DB {
    static GetConnection() {
        const db = promise_1.createPool({
            host: "bxukt5s6goelhpietevu-mysql.services.clever-cloud.com",
            user: "uvko3m4ipasyaerf",
            password: "LAGeFeRKSJ0nw9j1ShsQ",
            database: "bxukt5s6goelhpietevu",
            port: 3306
        });
        return db;
    }
}
exports.DB = DB;
