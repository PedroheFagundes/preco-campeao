import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Template } from "./components/MainComponents";
import Routes from "./Routes";

const Page = () => {
  return (
    <BrowserRouter>
      <Template>
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

export default Page;
