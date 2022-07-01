import '../../css/calculadora.css'
import BotonCalculador from './botonCalculadora'
import Pantalla from './pantallaCalculadora'
import BotonClear from './BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function Calculadora () {
    const [input, setInput] = useState('');
    const agreagarInput = val => {
        setInput(input + val);
    }
    const calcularResultado = () => {
        if (input){
            setInput(evaluate(input));
        }else{
            
        }
        
    }
 
    return(
        <div className='calculadora'>
            <Pantalla input={input}/>
            <div className='fila'>
                <BotonCalculador manejarClic={agreagarInput}>7</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>8</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>9</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>/</BotonCalculador>
            </div> 

            <div className='fila'>
                <BotonCalculador manejarClic={agreagarInput}>4</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>5</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>6</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>*</BotonCalculador>
            </div> 

            <div className='fila'>
                <BotonCalculador manejarClic={agreagarInput}>1</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>2</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>3</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>-</BotonCalculador>
            </div> 

            <div className='fila'>
                <BotonCalculador manejarClic={calcularResultado}>=</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>0</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>.</BotonCalculador>
                <BotonCalculador manejarClic={agreagarInput}>+</BotonCalculador>
            </div>

            <BotonClear clear = {()=>setInput('')}>Clear</BotonClear>
        </div>
    )
}

export default Calculadora