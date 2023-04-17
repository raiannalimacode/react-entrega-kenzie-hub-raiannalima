import { z } from "zod";

export const formRegisterTechSchema = z.object({
    title: z.string().min(1, "O título é obrigatório."),
    status: z.string().min(1, "Escolher o nível é necessário")
})
