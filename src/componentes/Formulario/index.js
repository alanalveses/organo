import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {
    const times =[
        'Tank',
        'Atirador',
        'Mago',
        'Assassino',
        'Suporte',
        'Soldado'
    ]

    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi enviado =>', nome, classe, imagem, time)
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos jogadores</h2>
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
            itens={times} 
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />
            <Botao > 
                Criar card
            </Botao >
            </form>
        </section>
    )

}

export default Formulario