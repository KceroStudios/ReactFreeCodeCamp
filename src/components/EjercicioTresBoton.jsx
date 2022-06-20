function BotonCalculador(props) {

    return(
        <button 
            className={`botonCalculador ${isNaN(props.children) ? 'operador' : ''}`}
            onClick = {() => props.manejarClick(props.children)}>
            {props.children}
        </button>
    )
}

export default BotonCalculador