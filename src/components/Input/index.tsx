import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) => {
    const { theme } = props;

    return css`
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

export default Input;
