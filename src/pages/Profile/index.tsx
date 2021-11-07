import React from "react";
import { ProfileArea } from "./styled";

const Page = () => {
  return (
    <ProfileArea>
      <div className="areaPix">
        <span>
          QUER CONTRIBUR COM O PROJETO PARA SEMPRE TER AS MELHORES PROMOÇÕES DA
          CIDADE EM SUAS MÃOS?
        </span>
        <div>
          <img src="/images/pix.png" alt="" />
          <span>CHAVE PIX E-MAIL</span>
          <span>pedrohefagundes@gmail.com</span>
          <hr />
          <span>
            PIX POR LINK{" "}
            <a href="https://nubank.com.br/pagar/oeti/kYsQQfzO7H">
              CLIQUE AQUI!
            </a>
          </span>
        </div>
      </div>
      <div className="areaRedes"></div>
      <div className="areaContato"></div>
    </ProfileArea>
  );
};

export default Page;
