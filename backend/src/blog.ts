import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { JWTPayload } from 'hono/utils/jwt/types'
import { createPostInput, updatePostInput } from "@ritzcreates/common-app"

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

    const { success } = createPostInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({
            msg: "Wrong inputs";
        })
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

blogRoutes.put("/blog", async (c)=>{
    const body = await c.req.json();
    const prisma = c.get("prisma");
    const payload = c.get("decoded");
    const userId = payload.id;

    const { success } = createPostInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({
            msg: "Wrong inputs";
        })
    }

    try {

        const updatedPost = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
                authorId: userId as string
            }
        })

        if(updatedPost){
            return c.json({
                msg: "Post updated successfully"
            })
        }

    } catch(error) {
        return c.json({
            msg: "Error inside Blog put route",
            error: error
        })
    }

})

blogRoutes.get("/blog/bulk", async (c)=>{
    const prisma = c.get("prisma");
    // const payload = c.get("decoded");
    // const userId = payload.id

    try {
        // const posts = await prisma.post.findMany({
        //     where: {
        //     authorId: userId as string
        //     }
        // })

        const posts = await prisma.post.findMany({})
        if(posts){
            return c.json({
                msg: "Posts:", posts
            })
        }
    } catch(error){
        return c.json({
            msg: "Error in Blog bulk route",
            error: error
        })
    }

})

blogRoutes.get("/blog/:id", async (c)=>{
    const id = c.req.param("id");
    const prisma = c.get("prisma");

    try {
        const specificRoute = await prisma.post.findUnique({
            where:{
                id: id
            }
        })

        if(specificRoute){
            return c.json({
                msg: "Post:", specificRoute
            })
        }

    } catch(error) {
        return c.json({
            msg: "Error inside blog route parameter",
            error: error
        }) 
    }
  
})


export default blogRoutes
