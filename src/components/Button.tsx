import styled from "styled-components";

const ButtonStyled = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

interface IProps {
  type?: "button" | "submit" | "reset" | undefined,
  children: string,
  onClick?: () => void,
}

function Button(props: IProps) {
  const { children, type = 'button', onClick } = props;

  return (
    <ButtonStyled onClick={onClick} type={type}>
      {children}
    </ButtonStyled>
  )
}

export default Button;
