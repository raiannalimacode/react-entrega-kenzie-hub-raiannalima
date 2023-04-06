import { z } from "zod";

export const formLoginSchema = z.object({
   email: z.string().min(1,"O e-mail é obrigatório").email("Forneça um e-mail válido."),
   password: z.string().min(8, "A senha precisa conter pelo menos oito caracteres.")
   .regex(/(?=.*?[A-Z])/, "´É necessário pelo menos uma letra maiúscula.")
   .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
   .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
})
