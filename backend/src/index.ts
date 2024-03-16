import {Context, Hono} from 'hono'
import { PrismaClient } from '@prisma/client'
import {PrismaTiDBCloud} from "@tidbcloud/prisma-adapter";
import { connect } from "@tidbcloud/serverless";
import {decodeJwt} from "@clerk/backend";

const app = new Hono()

export interface Env {
  DATABASE_URL: string;
}


app.get('/books', async (c) => {
  const header = c.req.header("Authorization");
  if (!header) {
    return new Response(
      "NOT FOUND"
      , {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
  }

  const jwt = decodeJwt(header.substring(7))

  const prisma = prisman(c)
  const user = await prisma.user.findUnique({
    where: {
      idaas_userid: jwt.payload.sub
    }
  })

  const books = await prisma.book.findMany({
    where: {
      userid: user.id
    }
  })

  console.log(books)

  return new Response(
    JSON.stringify({
      books,
    })
    , {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

})

const prisMap = new Map<string, PrismaClient>()

app.get('/architecture-test', async (c) => {
  const start = new Date();

  const prisma = prisman(c)

  const books = await prisma.book_sample.findMany({
    take: 20
  })

  const end = new Date();
  const duration = end.getTime() - start.getTime();
  return new Response(
    JSON.stringify({
      books,
      tidbQueryDuration: `${duration}ms`
    })
    , {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
})


const prisman = (c:  Context) => {
  const prisma = c.get(c.env.DATABASE_URL);
  if (prisma) {
    return prisma
  }


  const connection = connect({ url: c.env.DATABASE_URL });
  const adapter = new PrismaTiDBCloud(connection);
  const newPrisma = new PrismaClient({ adapter });


  prisMap.set(c.env.DATABASE_URL, newPrisma)
  return newPrisma
}

export default app
