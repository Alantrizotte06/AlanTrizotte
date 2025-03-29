import React from "react"; //Linha adicionada para evitar erros de importação.
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>
    </Routes>
  );
}
