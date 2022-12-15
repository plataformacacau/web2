import React from "react"
import Logo from "../../assets/logo.png"
import Botao from "../Botao"
import { StyledHeader } from "./styles"

const navList = [
	{ name: "Início", path: "/" },
	{ name: "Sobre", path: "./sobre" },
	{ name: "Envolvidos", path: "./equipe" },
	{ name: "Contato", path: "./contato" },
]

export default function Header(props) {
	return (
		<>
			<StyledHeader>
				<div className="MaxWidthWrapper headerContainer">
					<a href="/" className="logoContainer">
						<img src={Logo} alt="Logo" />
					</a>
					<nav>
						{navList.map((item, index) => (
							<a
								key={index}
								href={item.path}
								className={props.active == item.name ? "navItem active" : "navItem"}
							>
								{item.name}
							</a>
						))}
					</nav>
					<a href="http://plataformacacau.uesc.br/login">
						<Botao>Login</Botao>
					</a>
				</div>
			</StyledHeader>
			<div className="space"></div>
		</>
	)
}
