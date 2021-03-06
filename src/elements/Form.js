import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d",
};

const Formulario = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
@media (max-width: 800px){
  grid-template-columns: 1fr;
}
`;

const Label = styled.label`
display: block;
font-weight: 700;
padding: 10px;
min-height: 40px;
cursor: pointer;
`;

const GroupInput = styled.div`
position: relative;
z-index: 90;
`;

const Input = styled.input`
width: 100%;
background: #fff;
border-radius: 3px;
height: 45px;
line-height: 45px;
padding: 0 40px 0 10px;
transition: .3s ease all;
border: 3px solid transparent

  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;

const LeyendError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.error};
  /* display: none; */
`;

const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 20; 
`;

const Terms = styled.div`
  grid-column: span 2;
input{
    margin-right: 10px;
  }
`;

const ContentButtonCenter = styled.div`
  display:flex;
  flex-direction: column;
  align-item: center;
  grid-column: span 2;
`;

const Button = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: .1s ease all;

  &:hover{
    box-shadow: 3px 0px 30px rgba(163,163,163,1);
  }

`;

export { Formulario, Label, GroupInput, Input, LeyendError, IconValidation, Terms, ContentButtonCenter, Button  };
