import { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Layout } from "../../components/Layout";

import plusImg from "../../assets/images/icons/plus.png";
import minusImg from "../../assets/images/icons/minus.png";
import editImg from "../../assets/images/icons/edit.png";

import api from "../../services/api";

import { InputSearch, Table } from "./styles";
import { Modal } from "../../components/Modal";



export function Home() {
  const [customers, setCustomers] = useState();
  const [remove, setRemove] = useState(0);
  const [idCustomerDelete, setIdCustomerDelete] = useState(0);
  const [searchNames, setSearchNames] = useState("");

  const navigation = useNavigate();

  const customersFilters = useMemo(() => {
    const lowerSearch = searchNames.toLowerCase();
    return customers?.filter((customer) =>
      customer.TECL_NOME.toLowerCase().includes(lowerSearch)
    );
  }, [customers, searchNames]);

  useEffect(() => {
    async function getItems() {
      try {
        const res = await api.get("/v1/teste/clientes");
        setCustomers(res.data.data);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();
  }, []);

  function openModal(TECL_ID) {
    setRemove(1);
    setIdCustomerDelete(TECL_ID);
  }

  return (
    <Layout title="Teste ReactJS - SaibWeb">
      <InputSearch
        type="text"
        placeholder="Digite para filtrar"
        value={searchNames}
        onChange={(e) => setSearchNames(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <th>
              <Link to="/criarUsuario">
                <img src={plusImg} alt="Adicionar novo cliente" />
              </Link>
            </th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>UF</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {customersFilters?.map((element) => {
            return (
              <tr key={element.TECL_ID}>
                <td>
                  <button
                    onClick={() => {
                      openModal(element.TECL_ID);
                    }}
                  >
                    <img src={minusImg} alt="Remover cliente" />
                  </button>
                  <button
                    onClick={() => {
                      navigation("/editarUsuario", {
                        state: {
                          id: element.TECL_ID,
                          name: element.TECL_NOME,
                          address: element.TECL_ENDERECO,
                          city: element.TECL_CIDADE,
                          uf: element.TECL_UF,
                          phone: element.TECL_TELEFONE,
                        },
                      });
                    }}
                  >
                    <img src={editImg} alt="Editar cliente" />
                  </button>
                </td>
                <td data-title="Cidade">{element.TECL_NOME}</td>
                <td>{element.TECL_ENDERECO}</td>
                <td>{element.TECL_CIDADE}</td>
                <td>{element.TECL_UF}</td>
                <td>{element.TECL_TELEFONE}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {remove && (
        <Modal
          onRemoveCustomer={setRemove}
          customerId={idCustomerDelete}
          onUpdateList={setCustomers}
        />
      )}
    </Layout>
  );
}
