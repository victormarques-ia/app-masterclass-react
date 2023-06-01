"use client";

import Button from "../../../components/Button";
import RenderPosts from "../../../components/RenderPosts";
import { Container } from "./styles";
import { useRouter } from "next/navigation";

export default function MyPosts() {
  const router = useRouter();

  return (
    <Container>
      <Button onClick={() => router.push("/home/create-post")}>
        Criar post
      </Button>
      <RenderPosts me={true} />
    </Container>
  );
}
