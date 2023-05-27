import { useTheme } from "styled-components";
import Button from "../../components/Button";
import Post from "../../components/Post";
import Input from "../../components/Input";

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <h1
        style={{
          color: theme.colors.primary,
        }}
      >
        Home
      </h1>

      <Post
        title="Post Test"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus ad eligendi quisquam modi repellendus perspiciatis deleniti doloremque exercitationem eius dolores voluptates ipsa, quidem accusamus doloribus vel dolorum ullam sapiente?"
      />

      <Button variant="primary" onClick={() => alert("Primary")}>
        Primary Button
      </Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="primary" disabled>
        Disabled primary
      </Button>

      <Input placeholder="Input Test" />
    </div>
  );
}
