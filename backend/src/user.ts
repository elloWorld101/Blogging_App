import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { JWTPayload } from 'hono/utils/jwt/types'
import  { signinInput, signupInput }  from "@ritzcreates/common-app"

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

export const userRoutes = new Hono<Env>();


userRoutes.use('*', async (c, next) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  c.set('prisma', prisma as unknown as PrismaClient)
  await next()
})


//Routes

userRoutes.post('/signup', async (c) => {
    console.log("Hello from signup");
    const body = await c.req.json();
    const JWT_SECRET = c.env.JWT_SECRET;
    const prisma = c.get("prisma");

    const { success } = signupInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({
            msg: "Wrong inputs bro"
        })
    }

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

userRoutes.post("/signin", async (c)=>{

    const body = await c.req.json()
    const prisma = c.get("prisma");  
    const JWT_SECRET = c.env.JWT_SECRET;
    const { success } = signinInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({
            msg: "Wrong Inputs"
        })
    }

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


export default userRoutes
