import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Equipe from "./pages/Equipe"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Sobre from "./pages/Sobre"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/equipe" element={<Equipe />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	)
}
