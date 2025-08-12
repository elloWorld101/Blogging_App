import zod from "zod"

export const signupInput = zod.object({
    email: zod.email({error: "Wrong Email"}),
    password: zod.string().min(3,{error:"Minimum length 3 required"}),

    name: zod.string().optional()
});


export const signinInput = zod.object({
    email: zod.email({error: "Wrong Email"}),
    password: zod.string()
});  


export const createPostInput = zod.object({
    title: zod.string().min(1,{error: "Title Required"}),
    content: zod.string().min(1, {error: "Content Required"}),
});


export const updatePostInput = zod.object({
    title: zod.string().min(1, {error: "Title Required"}),
    content: zod.string().min(1, {error: "Content Required"}),
    id: zod.string()
});


export type SignupInput = zod.infer <typeof signupInput>;
export type SigninInput = zod.infer <typeof signinInput>;
export type CreatePostInput = zod.infer <typeof createPostInput>;
export type UpdatePostInput = zod.infer <typeof updatePostInput>;

//yeh structured format publish karna baaki hai 
