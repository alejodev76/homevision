import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../styles/Theme";
import PropertyList from "../views/Properties/PropertyList";

function App() {
  return (
    <ThemeProvider theme={theme}>
						<CssBaseline />
						<PropertyList />
		</ThemeProvider>
  );
}

export default App;
