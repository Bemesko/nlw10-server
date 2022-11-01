import Fastify from 'fastify'

//TODO: read from config file or env variable
let applicationPort = 3333

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    fastify.get('/pools/count', () => {
        return { count: 0 }
    })

    await fastify.listen({ port: applicationPort })
}

bootstrap()