import { useEffect, useMemo } from "react";
import useApi from "../../hooks/useApi";
import { useHandleApiRequest } from "../../hooks/useHandleApiRequest";
import Post from "../../components/Post";
import { Container } from "./styles";
import PostInterface from "../../interfaces/PostInterface";

export default function Home() {
  const api = useApi();
  const { loading, execute, data } = useHandleApiRequest<{
    data: PostInterface[];
  }>();

  useEffect(() => {
    execute(() => api.get("/posts"));
  }, [api, execute]);

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
          {sortedPosts.map((post) => (
            <Post
              key={post.id}
              title={post.attributes.title}
              content={post.attributes.description}
              date={post.attributes.createdAt}
              onClick={() => {
                console.log("click");
              }}
            />
          ))}
        </>
      )}
    </Container>
  );
}
