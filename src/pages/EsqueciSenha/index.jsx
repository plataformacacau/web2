import React, { useState } from "react"
import Layout from "../../components/Layout"
import { StyledLogin } from "./styles"
import Leaves from "../../assets/leaves.png"
import CustomInput from "../../components/StyledInput"

export default function EsqueciSenha() {
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	})

	return (
		<Layout header="Início">
			<StyledLogin>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>

				<div className="content">
					<h1>Esqueceu sua senha?</h1>
					<p>Será enviado um código para você restaurar sua senha pelo seu email</p>
					<form action="">
						<CustomInput
							icon="ph:envelope-simple"
							name="email"
							type="email"
							id="email"
							placeholder="E-mail"
							value={loginForm.email}
							onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
						/>
						<button type="submit" disabled={!loginForm.email}>
							Enviar
						</button>
					</form>
				</div>
			</StyledLogin>
		</Layout>
	)
}
