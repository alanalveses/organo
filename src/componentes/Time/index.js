import './Time.css'

const Time = (props) => {
    // const css = { backgroundColor: props.corSecundaria}
    // <section className='time' style={css}>

    return (
        <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time