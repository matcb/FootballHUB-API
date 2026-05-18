import fastify from 'fastify';

const fServer = fastify({logger: true});

async function startServer () : Promise<void>{

    try
    {
        await fServer.listen({port: 3000})
    }
    catch(err)
    {
        fServer.log.error(err);
        process.exit();
    }
}
fServer.get('/health', (req, res) => {
    res.send({status: 'ok'})
});
startServer();