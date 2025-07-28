import { Hono } from "hono";
import { userRoutes } from "./user";
import { blogRoutes } from "./blog";

const app = new Hono();

app.route("/api/v1", userRoutes);
app.route("/api/v1", blogRoutes);

export default app;

