import Button from "../../components/Button";
import RenderPosts from "../../components/RenderPosts";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export default function MyPosts() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate("/create-post")}>Criar post</Button>
      <RenderPosts me={true} />
    </Container>
  );
}
