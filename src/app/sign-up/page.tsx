"use client";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpFormSchema, {
  SignUpFormType,
} from "../../utils/schemas/signUpFormSchema";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import Form from "../../components/Form";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { AppContext } from "../../contexts/AppContext";
import useApi from "../../hooks/useApi";

export default function SignUp() {
  const api = useApi();
  const router = useRouter();
  const { setSession } = useContext(AppContext);
  const { loading, execute } = useHandleApiRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormType> = async (body) => {
    try {
      const data = await execute(() => api.post("/auth/sign-up", body));

      setSession(data?.accessToken, data?.user);
      router.replace("/");
      alert("Conta criada com sucesso");
    } catch (error) {
      alert("Erro ao criar conta");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1
          style={{
            marginBottom: 16,
          }}
        >
          Crie uma conta
        </h1>

        <Input
          {...register("name")}
          placeholder="Nome do usuário"
          type="text"
          error={errors.name?.message}
        />

        <Input
          {...register("email")}
          placeholder="E-mail"
          type="email"
          error={errors.email?.message}
        />

        <Input
          {...register("password")}
          placeholder="Senha"
          type="password"
          error={errors.password?.message}
        />

        <Link href="/sign-in">Já tenho uma conta</Link>

        <Button type="submit" disabled={loading}>
          Criar conta
        </Button>
      </Form>
    </Container>
  );
}
