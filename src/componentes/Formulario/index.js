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
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card dos jogadores</h2>
            <CampoTexto label="Nome" placeholder='Digite seu nome'/>
            <CampoTexto label="Classe" placeholder='Digite seu classe'/>
            <CampoTexto label="Imagem" placeholder='Digite seu endereço da imagem'/>
            <ListaSuspensa label="Time" itens={times} />
            <Botao > 
                Criar card
            </Botao >
            </form>
        </section>
    )

}

export default Formulario