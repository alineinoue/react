import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/básicos/Aleatorio";
import ComParametro from "./components/básicos/ComParametro";
import Fragmento from "./components/básicos/Fragmento";
import Primeiro from "./components/básicos/Primeiro";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
        <Card titulo="Desafio Aleatório" color="#FA6900">
            <Aleatorio min={1} max={60} /> 
        </Card>
        
        <Card titulo="Fragmento" color="#E94C6F">
            <Fragmento />   
        </Card>

        <Card titulo="Com Parametro" color="#E8B71A">
            <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />  
        </Card>

        <Card titulo="Primeiro Componente" color="#588C73">
            <Primeiro></Primeiro>
        </Card>
    </div>
  </div>
);
