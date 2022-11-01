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
        const pools = await prisma.pool.findMany({
            where: {
                code: {
                    startsWith: 'B'
                }
            }
        })

        return { pools }
    })

    await fastify.listen({ port: applicationPort })
}

bootstrap()