import './Jogador.css'

const Jogador = ({nome, imagem, classe, corFundo}) => {
    return (<div className='jogador'>

        <div className='cabecalho' style={{backgroundColor: corFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{classe} </h5>
        </div>
    </div>)
}

export default Jogador