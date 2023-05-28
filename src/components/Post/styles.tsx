import styled, { css } from "styled-components";

const PostCard = styled.div`
  ${(props) => {
    const { theme } = props;

    return css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid ${theme.colors.divider};

      border-radius: ${theme.radius};
    `;
  }}
`;

const PostTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const PostContent = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export { PostCard, PostTitle, PostContent };
