import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query']
})

//TODO: read from config file or env variable
let applicationPort = 3333

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    fastify.get('/pools/count', async () => {
        const poolCount = await prisma.pool.count()

        return { poolCount }
    })

    await fastify.listen({ port: applicationPort })
}

bootstrap()