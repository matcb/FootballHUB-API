import Fastify from 'fastify';

const fServer = Fastify({logger: true});

async function startServer (){
    try
    {
        await fServer.listen({port: 3000})
    } 
    
    catch(err) 
    {
        fServer.log.error(err)
        process.exit()
    }
}


fServer.get( '/health', (request, reply) => reply.send({STATUS: 'OK'}) )

startServer();