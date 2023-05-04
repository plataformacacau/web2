
import React, { useState } from "react"
import Botao from "../../components/Botao"
import Layout from "../../components/Layout"
import { StyledMain } from "./styles"

import Leaves from "../../assets/leaves_dark.png"

export default function Home() {

	const [logged_user, setLoggedUser] = useState(JSON.parse(localStorage.getItem('user')))

	return (
		<Layout header="Início">
			<StyledMain>
				<h1>Plataforma Cacau</h1>
				<p>
					É uma plataforma integrada com sistemas e aplicações que coletam dados durante o
					período do cultivo do cacau, servindo como ferramenta de análise e prospecção.
				</p>
				<div className="botoes">
					{logged_user === null ?
						<Botao href="/login" outline>
							Faça Login
						</Botao>
						: null}
					<Botao href="./sobre">Saiba mais</Botao>
				</div>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>
			</StyledMain>
		</Layout>
	)
}
