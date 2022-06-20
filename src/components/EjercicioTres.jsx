import '../css/EjercicioTres.css'
import BotonCalculador from './EjercicioTresBoton'
import Pantalla from './EjercicioTresPantalla'
import BotonClear from './EjercicioTresBotonClear'
import { useState } from 'react'
import {evaluate} from 'mathjs'

function EjercicioTres () {
    const [input, setInput] = useState('');
    const insertarInput = val => {
        setInput(input + val);
    }
    const clearInput = () => {
        setInput('')
    }
    const calcularInput = () =>{
        if(input){
            setInput(evaluate(input))
        }
    }
    return(
    <div className="CalculadoraContenedor">
        <h3>1.- Crear una Calculadora</h3>
        <h2>A Calcular Ya!</h2>

        <div className='calculadora'>
            <Pantalla input={input}/>
            <div className='fila'>
                <BotonCalculador manejarClick={insertarInput}>7</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>8</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>9</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>/</BotonCalculador>
            </div> 

            <div className='fila'>
                <BotonCalculador manejarClick={insertarInput}>4</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>5</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>6</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>*</BotonCalculador>
            </div> 

            <div className='fila'>
                <BotonCalculador manejarClick={insertarInput}>1</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>2</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>3</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>-</BotonCalculador>
            </div> 

            <div className='fila'>
                <BotonCalculador manejarClick={calcularInput}>=</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>0</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>.</BotonCalculador>
                <BotonCalculador manejarClick={insertarInput}>+</BotonCalculador>
            </div>

            <BotonClear clear ={clearInput}>Clear</BotonClear>

        </div>
    </div>
    )
}

export default EjercicioTres