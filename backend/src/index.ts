import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


type Env = {
  Bindings: {
    DATABASE_URL: string
  }
  Variables: {
    prisma: PrismaClient
  }
}


const app = new Hono<Env>()
app.use('*', async (c, next) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  c.set('prisma', prisma as unknown as PrismaClient)
  await next()
})

app.post('/api/v1/signup', async (c) => {
  const body = await c.req.json();
  const prisma = c.get("prisma");
  
  try {

    const user = await prisma.user.create({
      data:{
        email: body.email,
        name: body.name,
        password: body.password
      }      
    })

    if(user){
      return c.json({
        msg: "User created"
      });
    }
    
  }catch(e){
    return c.json({
      msg: "User not created",
      error: e
    })
  }


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
