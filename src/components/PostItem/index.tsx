import {
  PostItemCard,
  PostItemContent,
  PostItemDate,
  PostItemTitle,
} from "./styles";

interface PostItemProps {
  title: string;
  content: string;
  date: string;
  onClick: () => void;
}

export default function PostItem({
  title,
  content,
  date,
  onClick,
}: PostItemProps) {
  return (
    <PostItemCard onClick={onClick}>
      <PostItemTitle>{title}</PostItemTitle>
      <PostItemContent>{content}</PostItemContent>
      <PostItemDate>{new Date(date).toLocaleString()}</PostItemDate>
    </PostItemCard>
  );
}
