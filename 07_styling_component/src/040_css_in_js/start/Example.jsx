import { useState } from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ isSelected }) => isSelected ? "pink" : "" };
  margin-bottom: 1em;
  transition: all 0.3s ease-out;

  &:hover, :active {
    opacity: 0.8;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const OrangeButton = styled(StyledButton)`
  background-color: orange;

  &:hover, :active {
    color: red;
    opacity: 0.7;
  }
`;

const OliveButton = styled(StyledButton)`
  background-color: olive;

  &:hover {
    color: white;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
    <StyledButton isSelected={ isSelected } onClick={ clickHandler }>ボタン</StyledButton>
    <OrangeButton isSelected={ isSelected } onClick={ clickHandler }>ボタン</OrangeButton>
    <OliveButton isSelected={ isSelected } onClick={ clickHandler }>ボタン</OliveButton>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
