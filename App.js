import React from "react";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import Rotas from "./src/rotas";
import { ProdutosProvider } from "./src/contexts/ProdutosContext";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}

