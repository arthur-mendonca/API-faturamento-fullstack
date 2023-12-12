import { z } from "zod";

const detalhesPartSchema = z.object({
  occurrence: z.object({
    name: z.string().min(1),
    origin: z.string().min(1),
    description: z.string().min(1),
  }),
  evidence: z.object({
    filename: z.instanceof(File),
  }),
});

const acoesPartSchema = z.object({
  analysis: z.object({
    description: z.string().min(1),
    filename: z.instanceof(File),
  }),
  correctiveActions: z.array(
    z.object({
      name: z.string().min(1),
    })
  ),
});

export const combinedSchema = detalhesPartSchema.merge(acoesPartSchema);
