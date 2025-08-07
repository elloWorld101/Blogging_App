import zod from "zod"

export const signupInput = zod.object({
    email: zod.email({error: "Email required"}),
    password: zod.string().min(3,{error:"Minimum length 3 required"}),

    name: zod.string().optional()
});

export type SignupInput = zod.infer <typeof signupInput>;


export const signinInput = zod.object({
    email: zod.email({error: "Email required"}),
    password: zod.string()
});

export type SigninInput = zod.infer <typeof signinInput>;

export const createPostInput = zod.object({
    title: zod.string({error: "Title required"}),
    content: zod.string(),
});

export type CreatePostInput = zod.infer <typeof createPostInput>;

export const updatePostInput = zod.object({
    title: zod.string(),
    content: zod.string(),
});

export type updatePostInput = zod.infer <typeof updatePostInput>;
