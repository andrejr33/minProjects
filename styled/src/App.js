import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import "./styles/reset.css";
import TodoList from "./components/Button";
import ThemeSwitcher from "./components/ThemeSwitcher";

import * as themes from "./styles/index";
import ThemeContext from "./styles/context";
import { ButtonPrimary } from "./styles/styles";

function App() {
  const [tema, setTema] = useState(themes.dark);
  useEffect(() => {});
  function toggleTheme() {
    if (tema == themes.dark) {
      setTema(themes.light);
    } else {
      setTema(themes.dark);
    }
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={tema}>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {tema => (
            <ThemeProvider theme={tema}>
              <TodoList />
              <ButtonPrimary>Teste</ButtonPrimary>
              <ButtonPrimary>Teste</ButtonPrimary>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
