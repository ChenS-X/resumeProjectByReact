import './App.css'
import { useEffect, useState } from 'react'
import ThemeContext from "@/contexts/themeContext";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme_in_localStorage = localStorage.getItem('theme');
    const theme_in_window = window.matchMedia('prefers-color-scheme: dark').matches;
    
    if(theme_in_localStorage === 'dark' || (!theme_in_localStorage && theme_in_window)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', '');
    }
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
