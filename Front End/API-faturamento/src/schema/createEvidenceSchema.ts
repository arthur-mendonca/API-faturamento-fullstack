import { z } from "zod";

export const createEvidenceSchema = z.object({
  filename: z.string(),
});
