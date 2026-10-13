import React, { useContext } from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ComponenteFilho = () => {

    const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
        <p>{mensagem}</p>
        <button onclick={() => setMensagem("Nova mensagem")}>
            Atualizar Mensagem
        </button>
    </div>
  );
};

export default ComponenteFilho