import React, { createContext, useState } from "react"

export const MeuContexto = createContext();

export const MeuContextoProvider = ({ children }) => {
    const {mensagem, setMensagem} = useState("Mensagem Inicial");

    const valorContexto = {
        mensagem,
        setMensagem,
    };

    return (
        <MeuContexto.Provider value={valorContexto}>
            {children}
        </MeuContexto.Provider> 
    );
};