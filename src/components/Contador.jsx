import React, { useReducer } from 'react'

const estadoInicial = { contador: 0 };

function reducer(estado, acao) {
    switch (acao.tipo) {
        case "incrementar":
            return { contador: estado.contador +1 };

        case "decrementar":
            return { contador: estado.contador - 1 };
        
        case "reset":
            return { contador: 0 };
        
        default:
            throw new Error("Ação não Suportada")
    }
}



function Contador() {
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <>
    Contagem: {estado.contador}
    <button onClick={() => dispatch({ tipo: "incrementar" })}>
    Incrementar
    </button>
    <button onClick={() => dispatch({ tipo: "decrementar"})}>
    Decrementar
    </button>      
    <button onClick={() => dispatch({ tipo: "reset"})}>
    Reset
    </button> 
    </>
  )
}

export default Contador