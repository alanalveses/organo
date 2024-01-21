import Jogador from '../Jogador'
import './Time.css'

const Time = (props) => {
    // const css = { backgroundColor: props.corSecundaria}
    // <section className='time' style={css}>

    return (
        <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => <Jogador nome={jogador.nome} classe={jogador.classe} imagem={jogador.imagem} /> )}

            </div>
        </section>
    )
}

export default Time