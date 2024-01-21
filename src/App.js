import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Tank',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7D9',
    },
    {
      nome: 'Atirador',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Mago',
      corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Assassino',
      corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Suporte',
      corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Soldado',
      corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Multiplas Classes',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
  ]

  const [jogadores, setJogadores] = useState({})

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomesTimes={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador) }/>

      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}

  
    </div>
  );
}

export default App;
