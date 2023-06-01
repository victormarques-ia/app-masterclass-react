import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  padding: 80px 0;

  max-width: ${(props) => props.theme.breakpoints.md}px;
`;

export { Container };
