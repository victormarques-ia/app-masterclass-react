"use client";

import { useCallback, useEffect, useMemo } from "react";
import useApi from "../../hooks/useApi";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import PostItem from "../PostItem";
import { Container } from "./styles";
import PostInterface from "../../interfaces/PostInterface";

import { useRouter } from "next/navigation";

interface RenderPostsProps {
  me?: boolean;
}

export default function RenderPosts({ me = false }: RenderPostsProps) {
  const api = useApi();
  const { loading, execute, data } = useHandleApiRequest<PostInterface[]>();

  const router = useRouter();

  const getPosts = useCallback(async () => {
    try {
      await execute(() => api.get(`/posts${me ? "/me" : ""}`));
    } catch (error) {
      alert("Erro ao buscar posts");
    }
  }, [api, execute, me]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Memorize the sorted posts for avoiding unnecessary re-renders
  const sortedPosts = useMemo(() => {
    if (!data) return [];

    return data.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
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
                title={post.title}
                content={post.content}
                date={post.createdAt}
                onClick={() => {
                  router.push(`/home/post/${post.id}`);
                }}
              />
            ))
          )}
        </>
      )}
    </Container>
  );
}
