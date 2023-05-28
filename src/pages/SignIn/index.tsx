import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../api";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import Form from "../../components/Form";
import signInFormSchema, {
  SignInFormType,
} from "../../utils/schemas/signInFormSchema";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function SignIn() {
  const { setToken } = useContext(AppContext);
  const { loading, execute } = useHandleApiRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInFormType> = async (body) => {
    try {
      const data = await execute(() => api().post("/auth/local", body));

      setToken(data?.jwt);
      alert("Logado com sucesso");
    } catch (error) {
      alert("Erro ao logar na conta");
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
          Entrar na conta
        </h1>

        <Input
          {...register("identifier")}
          placeholder="Digite e-mail ou nome de usuário"
          type="text"
          error={errors.identifier?.message}
        />

        <Input
          {...register("password")}
          placeholder="Senha"
          type="password"
          error={errors.password?.message}
        />

        <a href="/sign-up">Criar uma conta</a>

        <Button type="submit" disabled={loading}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
