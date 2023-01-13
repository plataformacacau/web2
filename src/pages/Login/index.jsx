import React from "react"
import Layout from "../../components/Layout"
import { StyledLogin } from "./styles"
import Leaves from "../../assets/leaves.png"

export default function Login() {
	return (
		<Layout header="Início">
			<StyledLogin>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>

				<div className="content">
					<h1>Entre na plataforma!</h1>
					<form action="">
						<input type="text" placeholder="E-mail" />
						<input type="password" placeholder="Senha" />
						<a href="#">Esqueci minha senha</a>
						<span>
							Não tem uma conta?
							<a href="./sign-up">Cadastre-se!</a>
						</span>
						<button type="submit">Entrar</button>
					</form>
				</div>
			</StyledLogin>
		</Layout>
	)
}
