import { z } from "zod";

export const formRegisterSchema = z.object({
   name: z.string().min(1, "O nome é obrigatório."), 
   email: z.string().min(1,"O e-mail é obrigatório.").email("Forneça um e-mail válido."),
   password: z.string().min(8, "A senha precisa conter pelo menos oito caracteres.")
   .regex(/(?=.*?[A-Z])/, "´É necessário pelo menos uma letra maiúscula.")
   .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
   .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
   bio: z.string().min(1, "A bio é obrigatória."),
   contact: z.string().min(8, "O contato é obrigatório.")
   .regex(/(?=.*?[0-9])/, "É necessário um telefone válido."),
   course_module: z.string().min(1, "Escolher o módulo é necessário."),
   confirm: z.string().min(1, "A confirmação de senha é obrigatória")
   }).refine(({password, confirm}) => password === confirm, {
   message: "As senhas precisam corresponderem",
   path: ["confirm"],
})
