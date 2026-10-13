import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ComponenteFilho from './components/ComponenteFilho'
import ValorDoContexto from './components/ValorDoContexto'


function App() { 

  return (
    <>
    <ExemploUseEffect/>
    <Timer/>
    <MeuContextoProvider>
      <ComponenteFilho />
      <ValorDoContexto />
    </MeuContextoProvider>  
    </>
  )
}

export default App
