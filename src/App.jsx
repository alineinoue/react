import "./App.css";
import React from "react";

import ListaAlunos from "./components/repeticao/ListaAlunos"
import Familia from "./components/básicos/Familia";
import FamiliaMembro from "./components/básicos/FamiliaMembro"
import Card from "./components/layout/Card";
import Aleatorio from "./components/básicos/Aleatorio";
import ComParametro from "./components/básicos/ComParametro";
import Fragmento from "./components/básicos/Fragmento";
import Primeiro from "./components/básicos/Primeiro";
import ListaProdutos from "./components/repeticao/ListaProdutos";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
    <Card titulo="Desafio Repetição" color="#FF432E">
        <ListaProdutos></ListaProdutos>
    </Card>

    <Card titulo="Repeticao" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
    </Card>

      <Card titulo="Componente com Filhos" color="#00C8F8">
        <Familia sobrenome = "Ferreira">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo"/>
        </Familia>
      </Card>

      <Card titulo="Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="Com Parametro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
    </div>
);