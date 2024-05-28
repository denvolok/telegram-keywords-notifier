import { z } from "zod";

const envSchema = z.object({
  BOT_TOKEN: z.string(),
});

export const ENV = envSchema.parse(process.env);

export const getEnvIssues = (): z.ZodIssue[] => {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    return result.error.issues;
  }

  return [];
};
