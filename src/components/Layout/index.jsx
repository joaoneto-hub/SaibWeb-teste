
import { Link } from "react-router-dom";
import backImg from "../../assets/images/icons/back.png";
import { Container, Content } from "./styles";



export function Layout({ children, title }) {
  return (
    <>
      <Container>
        <Link to="/">
          <img src={backImg} alt="Voltar página" />
        </Link>

        <h1>{title}</h1>
      </Container>
      <Content>{children}</Content>
    </>
  );
}

