import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Equipe from "./pages/Equipe"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Sobre from "./pages/Sobre"
import EsqueciSenha from "./pages/EsqueciSenha"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/equipe" element={<Equipe />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/esqueci-senha" element={<EsqueciSenha />} />
			</Routes>
		</BrowserRouter>
	)
}
