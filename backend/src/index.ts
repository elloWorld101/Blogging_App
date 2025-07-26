import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Variables } from 'hono/types'

type Env = {
  Bindings: {
    DATABASE_URL: string
  } 
}


const app = new Hono<Env>()

app.use("*", async (c,next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  c.set("prisma", prisma);
  await next();
})

app.post('/api/v1/signup', async (c) => {
  

  return c.text('Signup Route');
})

app.post("/api/v1/signin", (c)=>{
  return c.text("Signin Route");
})

app.post("/api/v1/blog", (c)=>{
  return c.text("Blog Post")
})

app.put("/api/v1/blog", (c)=>{
  return c.text("Blog Put");
})

app.get("/api/v1/blog/:id", (c)=>{
  const id = c.req.param("id");
  console.log(id);
  return c.text("Blog with Route param");
})

app.get("/api/get/blog/bulk", (c)=>{
  return c.text("Blog Bulk");
})



export default app
