import { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import PostInterface from "../../interfaces/PostInterface";
import { Container, DeletePostButton, Divider, SubContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

export default function Post() {
  const { user } = useContext(AppContext);

  const api = useApi();

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    loading: loadingPost,
    execute: executeGetPost,
    data: postData,
  } = useHandleApiRequest<PostInterface>();

  const { loading: loadingDeletePost, execute: executeDeletePost } =
    useHandleApiRequest();

  const getPost = useCallback(async () => {
    try {
      await executeGetPost(() => api.get(`/posts/${id}`));
    } catch (error) {
      alert("Erro ao buscar post");
    }
  }, [api, executeGetPost, id]);

  const deletePost = useCallback(async () => {
    try {
      await executeDeletePost(() => api.delete(`/posts/${id}`));

      alert("Post deletado com sucesso!");
      navigate(-1);
    } catch (error) {
      alert("Erro ao deletar post");
    }
  }, [api, executeDeletePost, id, navigate]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (loadingPost) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      {postData ? (
        <>
          <h1>{postData.title}</h1>
          <SubContainer>
            <h5>{new Date(postData.createdAt).toLocaleString()}</h5>
            {user?.id === postData.authorId && (
              <DeletePostButton
                onClick={deletePost}
                disabled={loadingDeletePost}
              >
                Deletar
              </DeletePostButton>
            )}
          </SubContainer>

          <Divider />
          <p>{postData.content}</p>
        </>
      ) : (
        <p>Post não encontrado!</p>
      )}
    </Container>
  );
}
