import styled, {css} from "styled-components";


const Button = styled.button`
  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;
  width: ${props => props.lenght ? '100%' : 'auto'};

  &:hover {
    background: #44a559;
    color: #fff;
  }

  ${props => props.black && css`
    background: #000000;
    color: #fff;
    `}
  
  ${props => props.marginTop && css`margin-top: 10px`}
  ${props => props.marginRight && css`margin-right: 10px`}
`;

export default Button;