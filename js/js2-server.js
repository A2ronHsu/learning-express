import Express from 'express';
import router from './js3-routes.js';
const server = Express();

server.use(router)
server.listen(8080,()=>{
   console.log('listening to port 8080');
})