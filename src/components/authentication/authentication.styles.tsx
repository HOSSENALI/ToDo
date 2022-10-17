import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  margin: 30px auto;
  border: 1px solid red;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-around;
    margin: auto;
  }
`;
