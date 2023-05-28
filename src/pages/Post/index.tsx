import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import PostInterface from "../../interfaces/PostInterface";
import { Container, Divider } from "./styles";

export default function Post() {
  const api = useApi();
  const { loading, execute, data } = useHandleApiRequest<{
    data: PostInterface;
  }>();

  const { id } = useParams<{ id: string }>();

  const getPost = useCallback(async () => {
    try {
      await execute(() => api.get(`/posts/${id}`));
    } catch (error) {
      alert("Erro ao buscar post");
    }
  }, [api, execute, id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      {data ? (
        <>
          <h1>{data.data.attributes.title}</h1>
          <h5>{new Date(data.data.attributes.createdAt).toLocaleString()}</h5>
          <Divider />
          <p>{data.data.attributes.description}</p>
        </>
      ) : (
        <p>Post não encontrado!</p>
      )}
    </Container>
  );
}
