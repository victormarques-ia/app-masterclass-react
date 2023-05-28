import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) => {
    const { theme } = props;

    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      max-width: ${theme.breakpoints.md}px;

      margin: 0 auto;

      padding: 80px 0px;

      h1 {
        color: ${theme.colors.primary};
        font-size: ${theme.fontSizes.large};

        text-align: start;
      }

      h5 {
        margin-top: 0;
        color: ${theme.colors.secondary};

        line-height: 2.5;
      }

      p {
        margin-top: 0;

        color: ${theme.colors.text};
      }
    `;
  }};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;

  margin: 24px 0;

  color: ${(props) => props.theme.colors.divider};
  background-color: ${(props) => props.theme.colors.divider};
`;

export { Container, Divider };
