
import './App.css'
import Header from './components/header/Header'
import Cards from './components/cards/cards';
import Contador from './components/contadorDeClicks/contador';
import Calculadora from './components/calculadora/calculadora';
import ListaDeTarea from './components/listaDeTareas/listaDeTareas';

function App() {
    
    return (
    <div className="App">
        <Header />
        <Cards />
        <Contador />
        <Calculadora />
        <ListaDeTarea />
    </div>
  );
}

export default App;
