import { z } from "zod";

export const emailSchema = z.email("Enter a valid email address").trim();

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(72, "Password must be at most 72 characters");
