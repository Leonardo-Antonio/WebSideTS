import { App } from "./app"

(async () => {
    const app = new App(8080)
    await app.Listen()
})();
