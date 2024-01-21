import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            classe,
            imagem,
            time
        })
        setNome('')
        setClasse('')
        setImagem('')
        setTime('')
    }
    
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha todos os dados para entrar em um grupo!</h2>
            <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder='Digite seu nome'
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
            obrigatorio={true} 
            label="Classe" 
            placeholder='Digite seu classe'
            valor={classe}
            aoAlterado={valor => setClasse(valor)}
            />
            <CampoTexto 
            label="Avatar" 
            placeholder='Digite seu endereço da imagem'
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
            obrigatorio={true} 
            label="Time" 
            itens={props.nomesTimes} 
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />
            <Botao > 
                Entrar no Grupo
            </Botao >
            </form>
        </section>
    )

}

export default Formulario