import { z } from "zod";

export const createOccurrenceSchema = z.object({
  occurrence: z.object({
    name: z.string().min(1),
    origin: z.string().min(1),
    description: z.string(),
  }),
  evidence: z.object({
    filename: z.instanceof(File),
  }),
  analysis: z.object({
    filename: z.instanceof(File),
    description: z.string(),
  }),
  correctiveActions: z.array(
    z.object({
      name: z.string().min(1),
    })
  ),
});
