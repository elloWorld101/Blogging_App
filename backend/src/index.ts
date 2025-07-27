import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


type Env = {
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
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

//Middlewares

app.use("/api/v1/blog/*", async (c, next) =>{

  const token = c.req.header("Authorization");
  const safeToken: string = token ?? " ";
  const JWT_SECRET = c.env.JWT_SECRET;


  try{
    const decoded = await verify(safeToken, JWT_SECRET);
    if(decoded){
      
      console.log(decoded);
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

app.post('/api/v1/signup', async (c) => {
  const body = await c.req.json();
  const JWT_SECRET = c.env.JWT_SECRET;
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
      const token = await sign({
        id: user.id
      }, JWT_SECRET);

      if(token){
        
        return c.json({
          msg: "User created",
          token: token
        })
      
      }
    }


  }catch(error){
    
    return c.json({
      msg: "User not created",
      error: error
    })
  
  }


})

app.post("/api/v1/signin", async (c)=>{
  const body = await c.req.json()
  const prisma = c.get("prisma");
  const JWT_SECRET = c.env.JWT_SECRET;

  try{
    
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })

    if(user){
        
        const token = await sign({
          id: user.id
        }, JWT_SECRET)

        if(token) {
          
          return c.json({
            msg: "Signin Successfull",
            token: token
          })
        
        }else {
          
          return c.json({
            msg: "Token Not generated successfully"
          })
        
        }
    }else {
        
        return c.json({
          msg: "Signup first"
        })
      
      }

  }catch(error){
    
    return c.json({
      msg: "Signin failed",
      error: error
    })
  
  }


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
