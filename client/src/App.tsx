import { HashRouter } from "react-router-dom";
import "./App.css";
import { Template } from "./components/MainComponents";
import Footer from "./components/partials/Footer";
import Routes from "./Routes";

const Page = () => {
  return (
    <HashRouter>
      <Template>
        <Routes />
        <Footer />
      </Template>
    </HashRouter>
  );
};

export default Page;
