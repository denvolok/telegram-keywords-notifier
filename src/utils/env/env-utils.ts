import { z } from "zod";
import { generateErrorMessage } from "zod-error";
import { envSchema } from "./env-schema";
import logger from "../logger";

export const getEnvIssues = (): z.ZodIssue[] => {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    return result.error.issues;
  }

  return [];
};

export function validateEnv() {
  const issues = getEnvIssues();

  if (issues.length > 0) {
    logger.error("Invalid environment variables");
    logger.error(
      generateErrorMessage(issues, {
        delimiter: { error: "\\n" },
      }),
    );

    process.exit(-1);
  }
}
