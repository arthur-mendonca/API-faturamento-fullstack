import { z } from "zod";

export const createEvidenceSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  origin: z.string().min(1, { message: "Origem é obrigatório" }),
});
