import React from "react";
import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({children}) {
    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if(email === 'jonas@email.com' && senha === '123') {
            setUsuario({
                nome: 'Jonas',
                email,
                endereco: 'Av Ipiranga',
                telefone: '(79) 99933-9044'
            })
            return 'ok'
        }

        return 'Email ou senha incorretos'
    }

    return (
        <AutenticacaoContext.Provider 
            value={{
                usuario,
                login
            }}
        >
            {children}
        </AutenticacaoContext.Provider>
    )
}