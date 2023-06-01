"use client";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHandleApiRequest } from "../../../hooks/useHandleApiRequest";
import Form from "../../../components/Form";

import { useRouter } from "next/navigation";

import useApi from "../../../hooks/useApi";
import postFormSchema, {
  PostFormType,
} from "../../../utils/schemas/postFormSchema";
import TextArea from "../../../components/TextArea";

export default function CreatePost() {
  const api = useApi();
  const router = useRouter();

  const { loading, execute } = useHandleApiRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormType>({
    resolver: zodResolver(postFormSchema),
  });

  const onSubmit: SubmitHandler<PostFormType> = async (body) => {
    try {
      await execute(() => api.post("/posts", body));

      router.replace("/home");
      alert("Post criado com sucesso");
    } catch (error) {
      alert("Erro ao criar post");
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
          Crie um post
        </h1>

        <Input
          {...register("title")}
          placeholder="Digite o título do post"
          type="text"
          error={errors.title?.message}
        />

        <TextArea
          {...register("content")}
          placeholder="Digite o conteúdo do post"
          error={errors.content?.message}
        />

        <Button type="submit" disabled={loading}>
          Criar post
        </Button>
      </Form>
    </Container>
  );
}
