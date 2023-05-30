import * as z from "zod";

const signInFormSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export type SignInFormType = z.infer<typeof signInFormSchema>;

export default signInFormSchema;
