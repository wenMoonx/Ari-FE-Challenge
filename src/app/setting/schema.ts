import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Company's name must be at least 2 characters",
  }),
  website: z.string().url({
    message: "Please input website url",
  }),
  linkedin: z.string().url({
    message: "Please input linkedin url",
  }),
  industry: z.string().min(2, {
    message: "Company's industry must be at least 2 characters",
  }),
  employee: z.string(),
});
