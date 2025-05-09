import express from 'express'

interface ServerOptions {
    PORT: number;
}

export class Server {

    private app = express();
    private readonly port: number;

    constructor(options: ServerOptions){
        const { PORT } = options;

        this.port = PORT;
    }

    async start() {

        this.app.use( express.json() )

        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${ this.port }`)
        })
    }
}
