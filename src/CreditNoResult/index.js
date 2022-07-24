import { Button, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { CreditContext } from "../CreditContext";
import "./CreditNoResult.css";

function CreditNoResult() {
  const { name, lastname, setBasic, setGold, setBlack, setNoCredit } = React.useContext(CreditContext);
  const handleOpen = () => {window.location.reload(true);};

  const Othertheme = createTheme({
    palette: {
      primary: {
        light: "#4fc3f7",
        main: "#039be5",
        dark: "#0288d1",
        contrastText: "#fff",
      },
      other: {
        light: "#fff176",
        main: "#fff176",
        dark: "#f9a825",
        contrastText: "#000",
      },
      secondary: {
        light: "#9e9e9e",
        main: "#9e9e9e",
        dark: "#616161",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="container" id="advanced-search-form-not-result">
      <h1>
        {name} {lastname}
      </h1>
      {"\n"}
      <h2>
        Lamentablemente en estos momentos no tenemos un seguro que se ajuste a
        tus necesidades
      </h2>
      <ThemeProvider theme={Othertheme}>
        <Button
          onClick={handleOpen}
          color="primary"
          variant="contained"
          disableElevation
        >
          Volver al Simulador
        </Button>
      </ThemeProvider>
    </div>
  );
}

export { CreditNoResult };
