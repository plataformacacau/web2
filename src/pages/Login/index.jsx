import React, { useState } from "react"
import Layout from "../../components/Layout"
import { StyledLogin } from "./styles"
import Leaves from "../../assets/leaves.png"
import CustomInput from "../../components/StyledInput"

export default function Login() {
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	})

	function handleSubmit(e) {
		e.preventDefault()
		console.log(e)
	}

	return (
		<Layout header="Início">
			<StyledLogin>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>

				<div className="content">
					<h1>Entre na plataforma!</h1>
					<form onSubmit={handleSubmit}>
						<CustomInput
							icon="ph:user-circle"
							name="email"
							type="email"
							id="email"
							placeholder="E-mail"
							required
							value={loginForm.email}
							onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
						/>
						<CustomInput
							icon="material-symbols:lock-outline"
							name="password"
							type="password"
							id="password"
							placeholder="Senha"
							value={loginForm.password}
							required
							onChange={(e) =>
								setLoginForm({ ...loginForm, password: e.target.value })
							}
						/>
						<a href="./esqueci-senha">Esqueci minha senha</a>
						<span>
							Não tem uma conta?
							<a href="./cadastro">Cadastre-se!</a>
						</span>
						<button
							type="submit"
							disabled={!loginForm.email || loginForm.password.length < 6}
						>
							Entrar
						</button>
					</form>
				</div>
			</StyledLogin>
		</Layout>
	)
}
