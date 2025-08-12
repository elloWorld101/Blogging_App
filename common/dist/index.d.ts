import zod from "zod";
export declare const signupInput: zod.ZodObject<{
    email: zod.ZodEmail;
    password: zod.ZodString;
    name: zod.ZodOptional<zod.ZodString>;
}, zod.core.$strip>;
export type SignupInput = zod.infer<typeof signupInput>;
export declare const signinInput: zod.ZodObject<{
    email: zod.ZodEmail;
    password: zod.ZodString;
}, zod.core.$strip>;
export type SigninInput = zod.infer<typeof signinInput>;
export declare const createPostInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, zod.core.$strip>;
export type CreatePostInput = zod.infer<typeof createPostInput>;
export declare const updatePostInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
    id: zod.ZodString;
}, zod.core.$strip>;
export type UpdatePostInput = zod.infer<typeof updatePostInput>;
