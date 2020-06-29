import React from 'react';
import Card from './components/layout/Card';
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';

export default (props) =>(
<div className="App">
    <Card titulo="#3 - Terceiro Componente">
      <ComFilhos>
        <ul>
          <li>Carlos</li>
          <li>Daniel</li>
          <li>Ana</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#2- Segundo Componente">
      <ComParametro titulo="2- testando Titulo Paramentro" subtitulo="2- teste subTitulo" />
    </Card>

    <Card titulo="#1 - Primeiro Componente">
      <Primeiro />
    </Card>

  
  </div>
  );