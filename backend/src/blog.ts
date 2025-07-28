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
    decoded: JWTPayload

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

        c.set("decoded", decoded);    
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

blogRoutes.post("/blog", async (c)=>{
    const payload = c.get("decoded");
    const userId = payload.id;
    const body = await c.req.json();
    const prisma = c.get("prisma");

    if(typeof userId != "string"){
        throw new Error("UserId not a string")
    }

    try{
        const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId 
            }
        })

        if(post){
            return c.json({
                msg: "Post successfully created"
            })
        }

    } catch(error) {
        return c.json({
            msg: "Error found in blog post route",
            error: error
        })
    }
    

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
