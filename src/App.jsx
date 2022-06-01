import React from "react";
import {
  Formulario,
  Label,
  GroupInput,
  Input,
  LeyendError,
  IconValidation,
} from "./elements/Form";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
      </Formulario>
    </main>
  );
};

export default App;
