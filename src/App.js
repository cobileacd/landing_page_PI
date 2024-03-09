import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { useMode, ColorModeContext } from './theme'; // Adjust the import path according to your file structure
//import Navbar from "./components/global/Navbar";
import FrontPage from "./scenes/FrontPage/";
import LandingPage from './LandingPage';
import './App.css';

function App() {
  const [theme, colorMode] = useMode();

  /*
  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        <Router>
          <div className="app">
            <main className="content">
              <Navbar />
              <Routes>
                <Route path="/" element={<FrontPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
  */
  return (
    <LandingPage></LandingPage>
  );
  
}

export default App;
