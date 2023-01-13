import React from "react"
import Layout from "../../components/Layout"
import { StyledSignUp } from "./styles"
import Leaves from "../../assets/leaves.png"

export default function SignUp() {
	return (
		<Layout header="Início">
			<StyledSignUp>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>

				<div className="content">
					<h1>Cadastre-se na plataforma!</h1>
					<form action="">
						<div className="flex">
							<input type="text" placeholder="Nome" />
							<input type="text" placeholder="Sobrenome" />
						</div>
						<input type="text" placeholder="E-mail" />
						<input type="password" placeholder="Senha" />
						<span>
							Já tem uma conta?
							<a href="./login">Faça login!</a>
						</span>
						<label htmlFor="termos">
							<input type="checkbox" name="termos" id="termos" />
							<span>Aceito os termos de serviço</span>
						</label>
						<button type="submit">Cadastrar</button>
					</form>
				</div>
			</StyledSignUp>
		</Layout>
	)
}
