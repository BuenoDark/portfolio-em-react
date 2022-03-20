import { useContext } from "react";
import About from "./comp/about/about";
import Intro from "./comp/intro/intro";
import Prodlist from "./comp/prodlist/prodlist";
import Contact from "./comp/contact/contact";
import Toggle from "./comp/toggle/toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
    <Toggle/>
    <Intro/>
    <About/>
    <Prodlist/>
    <Contact/>

  </div>;
};

export default App;