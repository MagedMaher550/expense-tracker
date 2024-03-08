import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Define keyframes animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Define styled components
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 5px solid rgb(157, 155, 155);
  border-left: 4px solid #e3e4e7;
  animation: ${spin} 0.75s linear infinite; // Apply keyframes animation
  margin: 100px;
`;

// Loader component using styled components
export default function Loader(): JSX.Element {
  return (
    <Wrap>
      <Spinner />
    </Wrap>
  );
}
