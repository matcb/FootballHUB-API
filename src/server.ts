import fastify from 'fastify';

const fServer = fastify({logger: true});

async function startServer () : Promise<void>{

   
    try
    {
         fServer.get('/', (req, res) => {
        res.send({status: 'ok'})
        });

        fServer.get('/ping', (req,res)=> {
        res.send({message: 'pong'})
        })
        await fServer.listen({port:3000})
    }
    catch(err)
    {
        
        fServer.log.error(err);
        process.exit(1);
    }
}

startServer();

