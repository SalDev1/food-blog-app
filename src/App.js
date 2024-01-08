import "./App.css";
import AboutSection from "./components/AboutSection";
import ArticleSection from "./components/ArticleSection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import NavSection from "./components/NavSection";

function App() {
  return (
    <div className='App'>
      <NavSection />
      <HeaderSection />
      <AboutSection />
      <ArticleSection />
      <FooterSection />
    </div>
  );
}

export default App;
