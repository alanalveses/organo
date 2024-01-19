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

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi enviado')
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos jogadores</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder='Digite seu nome'/>
            <CampoTexto obrigatorio={true} label="Classe" placeholder='Digite seu classe'/>
            <CampoTexto label="Imagem" placeholder='Digite seu endereço da imagem'/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
            <Botao > 
                Criar card
            </Botao >
            </form>
        </section>
    )

}

export default Formulario