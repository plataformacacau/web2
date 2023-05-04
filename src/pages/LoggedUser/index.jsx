import React, { useState } from 'react';
import Layout from "../../components/Layout"
import { StyledLoggedUser } from "./styles"
import Leaves from "../../assets/leaves.png"
import Botao from "../../components/Botao"

export default function LoggedUser() {
	const [logged_user, setLoggedUser] = useState(JSON.parse(localStorage.getItem('user')))
	if (logged_user === null) window.location.replace('/login')
	localStorage.setItem('qtd_farms_data', JSON.stringify([0, 1]))
	return (
		<Layout header="Início">
			<StyledLoggedUser>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>
				<div className="content">
					<ul>
						<li>Nome completo: {logged_user.fullName}</li>
						<li>Contato: {logged_user.phone}</li>
						<li>E-mail: {logged_user.email}</li>
					</ul>
					<div>
						<Botao href='/cadastro/farm' outline>Cadastrar Nova Fazenda</Botao>
					</div>
				</div>
			</StyledLoggedUser>
		</Layout>
	)
}
