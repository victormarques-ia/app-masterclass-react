import { PostCard, PostContent, PostDate, PostTitle } from "./styles";

interface PostProps {
  title: string;
  content: string;
  date: string;
  onClick: () => void;
}

export default function Post({ title, content, date, onClick }: PostProps) {
  return (
    <PostCard onClick={onClick}>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <PostDate>{new Date(date).toLocaleString()}</PostDate>
    </PostCard>
  );
}
