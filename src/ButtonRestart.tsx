import React from "react";

export type ButtonRestartProps = {
  onButtonClick: () => void;
};

const ButtonRestart: React.FC<ButtonRestartProps> = ({onButtonClick}) => {
    return (
    <button onClick={() => onButtonClick()} children="Reset"></button>
  );
};

export default ButtonRestart;