import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpFormSchema, {
  SignUpFormType,
} from "../../utils/schemas/signUpFormSchema";
import api from "../../api";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import Form from "../../components/Form";

export default function SignUp() {
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
      await execute(() => api().post("/auth/local/register", body));

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
          {...register("username")}
          placeholder="Nome do usuário"
          type="text"
          error={errors.username?.message}
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

        <a href="/">Já tenho uma conta</a>

        <Button type="submit" disabled={loading}>
          Criar conta
        </Button>
      </Form>
    </Container>
  );
}
