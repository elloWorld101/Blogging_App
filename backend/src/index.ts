import { Hono } from "hono";
import { userRoutes } from "./user";
import { blogRoutes } from "./blog";
import { cors } from "hono/cors";

const app = new Hono();
app.use(cors());

app.route("/api/v1/user", userRoutes);
app.route("/api/v1/blog", blogRoutes);

export default app;

