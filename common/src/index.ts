import  zod, { email }  from "zod"

export const signupInput = zod.object({
    email: zod.email(),
    password: zod.string(),
    name: zod.string().optional()
});

export type SignupInput = zod.infer <typeof signupInput>;


export const signinInput = zod.object({
    email: zod.email(),
    password: zod.string()
});

export type SigninInput = zod.infer <typeof signinInput>;

export const createPostInput = zod.object({
    title: zod.string(),
    content: zod.string(),
});

export type CreatePostInput = zod.infer <typeof createPostInput>;

export const updatePostInput = zod.object({
    title: zod.string(),
    content: zod.string(),
});

export type updatePostInput = zod.infer <typeof updatePostInput>;
