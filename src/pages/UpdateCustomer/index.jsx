import { useLocation } from "react-router-dom";
import {Layout }from "../../components/Layout";

import { FormData } from "../../components/Form/index";


export function UpdateCustomer() {
  const location = useLocation();
  const state = location.state

  return (
    <Layout title="Atualizar registro">
      <FormData
        TECL_ID={state.id}
        TECL_NOME={state.name}
        TECL_ENDERECO={state.address}
        TECL_CIDADE={state.city}
        TECL_UF={state.uf}
        TECL_TELEFONE={state.phone}
      />
    </Layout>
  );
}
