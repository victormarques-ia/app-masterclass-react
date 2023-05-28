import { PostCard, PostContent, PostTitle } from "./styles";

interface PostProps {
  title: string;
  content: string;
}

export default function Post({ title, content }: PostProps) {
  return (
    <PostCard>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
    </PostCard>
  );
}
