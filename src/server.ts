import Fastify from 'fastify'

let applicationPort = 3333

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.listen({ port: applicationPort })
}

bootstrap()