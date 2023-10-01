import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <h4>Endereço</h4>
            <ul>
              <li>
                <a> Rua Prates, 194 - Bom Retiro </a>
              </li>
              <li>
                <a> SP 01121-000 </a>
              </li>
              <li>
                <a> info@meusite.com </a>
              </li>
              <li>
                <a> Telefone: (11) 3357-5098 </a>
              </li>
              <li>
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Loja</h4>
            <ul>
              <li>
                <Link to={`/products/women`}>Roupas Masculinas</Link>
              </li>
              <li>
                <Link to={`/products/men`}>Roupas Femininas</Link>
              </li>
              <li>
                <Link to={`/products/electronics`}>Eletrônicos</Link>
              </li>
              <li>
                <Link to={`/products/jewelery`}>Joalheria</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Suporte ao cliente</h4>
            <ul>
              <li>
                <a>Contato</a>
              </li>
              <li>
                <a>Central de ajuda</a>
              </li>
              <li>
                <a>Sobre nós</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Política</h4>
            <ul>
              <li>
                <a>Entregas e devoluções</a>
              </li>
              <li>
                <a>Termos e condições</a>
              </li>
              <li>
                <a>Métodos de pagamento</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
