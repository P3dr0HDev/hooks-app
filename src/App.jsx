import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ComponenteFilho from './components/ComponenteFilho'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'


function App() { 

  return (
    <>
    <ExemploUseEffect/>
    <Timer/>
    <MeuContextoProvider>
      <ComponenteFilho />
      <ValorDoContexto />
    </MeuContextoProvider> 
    <Contador/> 
    </>
  )
}

export default App
