import styled, { css } from "styled-components";

const PostItemCard = styled.div`
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

const PostItemTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostItemContent = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostItemDate = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.colors.secondary};

  padding-top: 10px;
`;

export { PostItemCard, PostItemTitle, PostItemContent, PostItemDate };
