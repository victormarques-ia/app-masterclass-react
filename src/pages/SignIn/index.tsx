import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import Form from "../../components/Form";
import signInFormSchema, {
  SignInFormType,
} from "../../utils/schemas/signInFormSchema";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useApi from "../../hooks/useApi";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
  const api = useApi();
  const navigate = useNavigate();
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
      const data = await execute(() => api.post("/auth/local", body));

      setToken(data?.jwt);
      navigate("/");
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

        <Link to="/sign-up">Criar uma conta</Link>

        <Button type="submit" disabled={loading}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
