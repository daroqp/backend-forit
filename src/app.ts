import { envs } from "./config/adapter/envs"
import { Server } from "./presentation/server"

(() => {
    main()
})()

function main() {

    const server = new Server({
        PORT: envs.PORT
    })

    server.start()
}
