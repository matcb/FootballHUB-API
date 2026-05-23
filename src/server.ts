import fastify from 'fastify';
import { getReq } from './services/footballServiceAPI';

const fServer = fastify({logger: true});

async function startServer () : Promise<void>{

   
    try
    {
        if(!process.env.API_KEY){
        throw new Error("Erro na chave de API")
        }

         fServer.get('/matches', (req, res) => {
        res.send({status: 'ok'})
        });

        fServer.get('/teams', (req,res)=> {
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

