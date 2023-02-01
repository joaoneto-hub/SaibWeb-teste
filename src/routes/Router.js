import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/index";
import { UpdateCustomer } from "../pages/UpdateCustomer/index";
import { NewCustomer } from "../pages/NewCustomer/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/editarUsuario" element={<UpdateCustomer />} />
        <Route path="/criarUsuario" element={<NewCustomer />} />
        <Route path="*" element={<p>Error Pagina não encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
};
