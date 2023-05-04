import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Equipe from "./pages/Equipe"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import CadastroFarm from "./pages/CadastroFarm"
import CadastroFarmArea from "./pages/CadastroFarmArea"
import Sobre from "./pages/Sobre"
import EsqueciSenha from "./pages/EsqueciSenha"
import LoggedUser from "./pages/LoggedUser"
import Logout from "./pages/Logout"
import ResetStorage from "./pages/ResetStorage"

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
				<Route path="/cadastro/farm" element={<CadastroFarm />} />
				<Route path="/cadastro/area/" element={<CadastroFarmArea />} />
				<Route path="/esqueci-senha" element={<EsqueciSenha />} />
				<Route path="/logged-user" element={<LoggedUser />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/reset" element={<ResetStorage />} />
			</Routes>
		</BrowserRouter>
	)
}
