import { useCallback, useEffect, useMemo } from "react";
import useApi from "../../hooks/useApi";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import PostItem from "../PostItem";
import { Container } from "./styles";
import PostInterface from "../../interfaces/PostInterface";

import { useNavigate } from "react-router-dom";

interface RenderPostsProps {
  me?: boolean;
}

export default function RenderPosts({ me = false }: RenderPostsProps) {
  const api = useApi();
  const { loading, execute, data } = useHandleApiRequest<{
    data: PostInterface[];
  }>();

  const navigate = useNavigate();

  const getPosts = useCallback(async () => {
    try {
      await execute(() =>
        api.get("/posts", {
          params: {
            me,
          },
        })
      );
    } catch (error) {
      alert("Erro ao buscar posts");
    }
  }, [api, execute, me]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Memoize the sorted posts for avoiding unnecessary re-renders
  const sortedPosts = useMemo(() => {
    if (!data) return [];

    return [...data.data].sort((a, b) =>
      b.attributes.createdAt.localeCompare(a.attributes.createdAt)
    );
  }, [data]);

  return (
    <Container>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {sortedPosts.length === 0 ? (
            <p>Nenhum post encontrado</p>
          ) : (
            sortedPosts.map((post) => (
              <PostItem
                key={post.id}
                title={post.attributes.title}
                content={post.attributes.description}
                date={post.attributes.createdAt}
                onClick={() => {
                  navigate(`/posts/${post.id}`);
                }}
              />
            ))
          )}
        </>
      )}
    </Container>
  );
}
