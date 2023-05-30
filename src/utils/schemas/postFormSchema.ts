import * as z from "zod";

const postFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Título deve ter no mínimo 5 caracteres" }),
  content: z
    .string()
    .min(10, { message: "Conteúdo deve ter no mínimo 10 caracteres" }),
});

export type PostFormType = z.infer<typeof postFormSchema>;

export default postFormSchema;
