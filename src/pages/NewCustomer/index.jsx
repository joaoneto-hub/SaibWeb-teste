import {Layout} from "../../components/Layout/index";

import { FormData } from "../../components/Form/index";

export function NewCustomer() {
  return (
    <Layout title="Novo registro">
      <FormData
        TECL_NOME={""}
        TECL_ENDERECO={""}
        TECL_CIDADE={""}
        TECL_UF={""}
        TECL_TELEFONE={""}
      />
    </Layout>
  );
}
