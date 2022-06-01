import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Formulario,
  Label,
  GroupInput,
  Input,
  LeyendError,
  IconValidation, Terms, ContentButtonCenter, Button
} from "./elements/Form";
import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  //componente App
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="nombre">Usuario</Label>
          <GroupInput>
            <Input type="text" placeholder="usuario" id="nombre" />
            <IconValidation icon={faCheckCircle} />
          </GroupInput>
          <LeyendError>Lorem ipsum dolor sit amet.</LeyendError>
        </div>
        <Terms>
        <Label>
          <input type="checkbox" name="terminos" id="terminos" />
          Acepto los Terminos y Condiciones
        </Label>
        </Terms>
        <div>
          <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b> Por favor rellene el formulario correctamente
            </p>
        </div>
        <ContentButtonCenter>
          <Button type="submit">Enviar</Button>
          <p>Formulario enviado exitosamente!</p>
        </ContentButtonCenter>
      </Formulario>
    </main>
  );
};

export default App;
