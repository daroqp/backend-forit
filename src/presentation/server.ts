import express from 'express'

export class Server {

    private app = express();

    constructor(){}

    async start() {

        this.app.use( express.json() )

        this.app.listen(3000, () => {
            console.log(`Server running on port: 3000`)
        })
    }
}
