import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Fotter";
import { ThemeProvider } from "./context/ThemeContext";

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Example;
