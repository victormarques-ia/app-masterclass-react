import styled, { css } from "styled-components";

const Button = styled.button<{
  variant?: "primary" | "secondary";
}>`
  ${(props) => {
    const { theme, variant = "primary" } = props;

    const isPrimary = variant === "primary";

    let backgroundColor = isPrimary ? theme.colors.primary : "white";
    let color = isPrimary ? theme.colors.background : theme.colors.primary;
    let borderColor = `1px solid ${theme.colors.primary}`;

    let hoverBackgroundColor = isPrimary
      ? theme.colors.secondary
      : theme.colors.background;
    let hoverBorderColor = `1px solid ${theme.colors.secondary}`;

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
