import { createContext, useState } from 'react';


export const ThemeContext = createContext("light");



const ThemeContextProvider = ({children}) => {
    let [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider



