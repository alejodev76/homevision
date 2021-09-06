import React from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../styles/Theme";
import PropertyList from "../views/Properties/PropertyList";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
					<PropertyList />
        </Provider>
		</ThemeProvider>
  );
}

export default App;
