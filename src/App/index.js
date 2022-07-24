import React from "react";
import {CreditProvider} from "../CreditContext";
import { AppUI } from "./AppUi";

function App() {

  return (
    <CreditProvider>
      <AppUI 
        
      />
    </CreditProvider>
  );
}

export default App;
