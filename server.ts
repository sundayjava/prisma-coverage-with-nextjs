import {createServer} from 'http'
import { app } from './app'

const bootstrap = () => {
    const server = createServer(app)

    server.listen(3030,()=>{
        console.log("Listen on port :3030")
    })
}

bootstrap()