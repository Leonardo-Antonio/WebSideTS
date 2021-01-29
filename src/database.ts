import { createPool, Pool } from "mysql2/promise"

export class DB {
    public static GetConnection(): Pool {
        const db: Pool = createPool({
            host: "bxukt5s6goelhpietevu-mysql.services.clever-cloud.com",
            user: "uvko3m4ipasyaerf",
            password: "LAGeFeRKSJ0nw9j1ShsQ",
            database: "bxukt5s6goelhpietevu",
            port: 3306
        })
        return db
    }
}
