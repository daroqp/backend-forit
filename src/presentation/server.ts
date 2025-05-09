import express, { Router } from 'express'

interface ServerOptions {
    PORT: number;
    routes: Router;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: ServerOptions){
        const { PORT, routes } = options;

        this.port = PORT;
        this.routes = routes;
    }

    async start() {

        this.app.use( express.json() )

        this.app.use( this.routes )

        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${ this.port }`)
        })
    }
}
