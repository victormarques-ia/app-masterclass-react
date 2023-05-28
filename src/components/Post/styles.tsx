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

      width: 100%;

      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
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

const PostDate = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.colors.secondary};

  padding-top: 10px;
`;

export { PostCard, PostTitle, PostContent, PostDate };
