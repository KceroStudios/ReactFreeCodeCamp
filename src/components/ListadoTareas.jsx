import Tarea from './Tarea'
import TareaForm from './TareaForm'
function ListaDeTareas (){
    return(
        <>
            <TareaForm />
            <Tarea texto='Aprender react' />
        </>
    )
}

export default ListaDeTareas