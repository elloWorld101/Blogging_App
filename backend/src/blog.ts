import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { JWTPayload } from 'hono/utils/jwt/types'

type Env = {
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: {
    prisma: PrismaClient
    userId: JWTPayload
  }
}

export const blogRoutes = new Hono<Env>();

blogRoutes.use('*', async (c, next) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  c.set('prisma', prisma as unknown as PrismaClient)
  await next()
})

//Middlewares

blogRoutes.use("*", async (c, next) =>{

  const token = c.req.header("Authorization");
  const safeToken: string = token ?? " ";
  const JWT_SECRET = c.env.JWT_SECRET;
  

  try{
    const decoded = await verify(safeToken, JWT_SECRET);
    if(decoded){

        c.set("userId", decoded);    
        await next();

    }else{
      
        return c.json({
            msg: "Token not verified"
        })
    
    }

  }catch(error){
        return c.json({
        msg: "Error found",
        error: error
        })
    }
})

//Routes

blogRoutes.post("/blog", (c)=>{
    const payload = c.get("userId");
    const userId = payload.id;
    console.log(userId);

    return c.text("Blog Post")
})

blogRoutes.put("/blog", (c)=>{
  return c.text("Blog Put");
})

blogRoutes.get("/blog/bulk", (c)=>{
  return c.text("Blog Bulk");
})

blogRoutes.get("/blog/:id", (c)=>{
  const id = c.req.param("id");
  console.log(id);
  return c.text("Blog with Route param");
})


export default blogRoutes
