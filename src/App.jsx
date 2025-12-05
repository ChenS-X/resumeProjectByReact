import './App.css'
import { useEffect, useState, lazy, Suspense } from 'react'
import ThemeContext from "@/contexts/themeContext";
import Navbar from './components/Navbar'
import Header from './components/Header'
// import Services from './components/Services';
// import Work from './components/Work';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// 组件懒加载
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Work = lazy(() => import('./components/Work'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {

  // 修改meta
  useEffect(() => {
    document.title = "ChenS-X | 个人简历";
  }, []);

  // 监听intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src= img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    const hiddenElements = document.querySelectorAll('._lazy_img');
    hiddenElements.forEach((el) => observer.observe(el))
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // 获取设置主题
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
      {/* <Services /> */}
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
