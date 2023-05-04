import React, { use, useState } from "react"
import Layout from "../../components/Layout"
import { StyledLogin } from "./styles"
import Leaves from "../../assets/leaves_dark.png"
import CustomInput from "../../components/StyledInput"

export default function Login() {
	const [user_list, setUserList] = useState(JSON.parse(localStorage.getItem('users')))
	const [logged_user, setLoggedUser] = useState(JSON.parse(localStorage.getItem('user')))

	if (logged_user !== null) window.location.replace('/logged-user');

	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	})


	function handleSubmit(e) {
		e.preventDefault()
		if (!user_list) {
			alert('E-mail ou senha incorretos!');
			return
		}
		let user = user_list.filter((el) => (el.email == loginForm.email && el.password == loginForm.password));
		if (user.length) {
			localStorage.setItem('user', JSON.stringify(user[0]));
			window.location.replace('/logged-user');
		} else {
			alert('E-mail ou senha incorretos!');
			return
		}
	}

	return (
		<Layout header="Início">
			<StyledLogin>
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
						<span><a href="./esqueci-senha">Esqueci minha senha</a></span>
						<span>
							Não tem uma conta?
							<a href="./cadastro"> Cadastre-se!</a>
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
