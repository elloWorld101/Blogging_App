import zod from "zod"

export const signupInput = zod.object({
    email: zod.email({error: "Wrong Email"}),
    password: zod.string().min(3,{error:"Minimum length 3 required"}),

    name: zod.string().optional()
});

export type SignupInput = zod.infer <typeof signupInput>;


export const signinInput = zod.object({
    email: zod.email({error: "Wrong Email"}),
    password: zod.string()
});

export type SigninInput = zod.infer <typeof signinInput>;

export const createPostInput = zod.object({
    title: zod.string().min(1,{error: "Title Required"}),
    content: zod.string().min(1, {error: "Content Required"}),
});

export type CreatePostInput = zod.infer <typeof createPostInput>;

export const updatePostInput = zod.object({
    title: zod.string().min(1, {error: "Title Required"}),
    content: zod.string().min(1, {error: "Content Required"}),
});

export type updatePostInput = zod.infer <typeof updatePostInput>;
