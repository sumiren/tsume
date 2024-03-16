import {Context, Hono} from 'hono'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'
import { v4 as uuid } from 'uuid'

const app = new Hono()

export interface Env {
  DATABASE_URL: string;
}


app.get('/', async (c) => {
  const prisma = prisman(c)

   await prisma.book.create({
     data: {
       id: uuid(),
       name: "いい本"

     }
   })
  const books = await prisma.book.findMany({
    where: {
      name: "いい本"
    }
  })
  return new Response(books[0].id, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
})

const prisMap = new Map<string, PrismaClient>()

const prisman = (c:  Context) => {
  console.log("DATABASE_URL", c.env.DATABASE_URL)
  const prisma = c.get(c.env.DATABASE_URL);
  if (prisma) {
    return prisma
  }


  const neon = new Pool({ connectionString: c.env.DATABASE_URL })
  const adapter = new PrismaNeon(neon)
  const newPrisma = new PrismaClient({ adapter })
  prisMap.set(c.env.DATABASE_URL, newPrisma)
  return newPrisma
}

export default app
