import { Hono } from 'hono'


const app = new Hono()

app.post('/api/v1/signup', (c) => {
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
