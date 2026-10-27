import type { z } from "zod";
import { signInSchema, signUpSchema } from "./auth.schema";
import { contactSchema } from "./contact.schema";

/** Form id → schema. The client-side form engine looks schemas up here. */
export const formSchemas: Record<string, z.ZodType> = {
  signin: signInSchema,
  signup: signUpSchema,
  contact: contactSchema,
};
