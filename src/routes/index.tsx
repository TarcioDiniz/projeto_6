import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import FormPage from "../pages/form";
import Faq from "../pages/faq";
import Page404 from "../pages/page404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Page404/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;