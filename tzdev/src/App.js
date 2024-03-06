import { createContext, useStatem, useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer';
import ReactGA from 'react-ga'

ReactGA.initialize('G-CH9HFR7Z40');

export const ThemeContext = createContext(null); 

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
      <div className="App"  id={theme}>
        <header className='header'>
          <Navbar/>
        </header>
        <body>
          <Body/>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    </ThemeContext.Provider>    
  );
}

export default App;
