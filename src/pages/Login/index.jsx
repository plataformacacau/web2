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

	return (
		<Layout header="Início">
			<StyledLogin>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>

				<div className="content">
					<h1>Entre na plataforma!</h1>
					<form action="">
						<CustomInput
							icon="ph:user-circle"
							name="email"
							type="email"
							id="email"
							placeholder="E-mail"
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
							onChange={(e) =>
								setLoginForm({ ...loginForm, password: e.target.value })
							}
						/>
						<a href="#">Esqueci minha senha</a>
						<span>
							Não tem uma conta?
							<a href="./sign-up">Cadastre-se!</a>
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
