import React, { useEffect } from "react"
import Logo from "../../assets/logo.png"
import Botao from "../Botao"
import { StyledHeader } from "./styles"

const navList = [
	{ name: "Início", path: "/", active: false },
	{ name: "Sobre", path: "./sobre", active: false },
	{ name: "Envolvidos", path: "./equipe", active: false },
	{ name: "Contato", path: "./contato", active: false },
]

export default function Header(props) {
	useEffect(() => {
		navList.forEach((item) => {
			if (item.name === props.active) {
				item.active = true
			}
		})
	}, [])

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
								className={item.active ? "navItem active" : "navItem"}
							>
								{item.name}
							</a>
						))}
					</nav>
					<Botao>Login</Botao>
				</div>
			</StyledHeader>
			<div className="space"></div>
		</>
	)
}
