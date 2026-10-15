import React, { useState, useContext } from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ComponenteFilho = () => {

    const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
        <p>{mensagem}</p>
        <button onClick={() => setMensagem("Trickster!")}>
            Atualizar Mensagem
        </button>
    </div>
  );
};

export default ComponenteFilho