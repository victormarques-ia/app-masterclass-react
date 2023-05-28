import styled, { css } from "styled-components";

const StyledInput = styled.input`
  ${(props) => {
    const { theme } = props;

    return css`
      width: 100%;

      font-size: ${theme.fontSizes.small};
      padding: 10px;
      border-radius: ${theme.radius};
      border: 2px solid ${theme.colors.primary};
      &:focus {
        border-color: ${theme.colors.secondary};
      }
    `;
  }}
`;

const ErrorSpan = styled.span`
  ${(props) => {
    const { theme } = props;

    return css`
      color: ${theme.colors.error};
      font-size: ${theme.fontSizes.small};
    `;
  }}
`;

export { StyledInput, ErrorSpan };
