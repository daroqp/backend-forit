import { envs } from "./config/adapter/envs"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"

(() => {
    main()
})()

function main() {

    const server = new Server({
        PORT: envs.PORT,
        routes: AppRoutes.routes,
    })

    server.start()
}
