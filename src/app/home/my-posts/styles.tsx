import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 80px 0;

  max-width: ${(props) => props.theme.breakpoints.md}px;

  button {
    max-width: 200px;
    margin-bottom: 24px;
  }
`;

export { Container };
