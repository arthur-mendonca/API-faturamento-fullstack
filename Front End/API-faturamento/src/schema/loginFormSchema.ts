import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .min(1, { message: "Campo obrigatório" }),
  password: z
    .string()
    .min(4, { message: "Mínimo 4 caracteres" })
    .min(1, { message: "Campo obrigatório" }),
});
