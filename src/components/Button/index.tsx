import styled, { css } from "styled-components";

const Button = styled.button<{
  variant?: "primary" | "secondary";
}>`
  ${(props) => {
    const { theme, variant = "primary" } = props;

    const isPrimary = variant === "primary";

    const backgroundColor = isPrimary ? theme.colors.primary : "white";
    const color = isPrimary ? theme.colors.background : theme.colors.primary;
    const borderColor = `1px solid ${theme.colors.primary}`;

    const hoverBackgroundColor = isPrimary
      ? theme.colors.secondary
      : theme.colors.background;
    const hoverBorderColor = `1px solid ${theme.colors.secondary}`;

    return css`
      width: 100%;

      font-size: ${theme.fontSizes.small};
      padding: 10px 20px;
      border-radius: ${theme.radius};
      border: none;
      cursor: pointer;

      background-color: ${backgroundColor};
      color: ${color};
      border: ${borderColor};

      &:hover {
        background-color: ${hoverBackgroundColor};
        border: ${hoverBorderColor};
      }
    `;
  }};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
