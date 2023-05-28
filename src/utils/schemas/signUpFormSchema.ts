import * as z from "zod";

const signUpFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export type SignUpFormType = z.infer<typeof signUpFormSchema>;

export default signUpFormSchema;
