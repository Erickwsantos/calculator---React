import { ButtonContainer } from "./styles.ts";

const Button = ({ label, onClick, bgColor, color }) => {
  return (
    <ButtonContainer onClick={onClick} bgColor={bgColor} color={color}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
