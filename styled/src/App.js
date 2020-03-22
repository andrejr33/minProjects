import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import TodoList from "./components/Button";
import ThemeSwitcher from "./components/ThemeSwitcher";

import * as themes from "./styles/index";
import ThemeContext from "./styles/context";

function App() {
  const [tema, setTema] = useState(themes.dark);

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
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
