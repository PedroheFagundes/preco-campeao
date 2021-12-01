import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Template } from "./components/MainComponents";
import Footer from "./components/partials/Footer";
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
