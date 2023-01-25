import React, { useState } from "react"
import Logo from "../../assets/logo.png"
import LogoSmall from "../../assets/icon.png"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import Botao from "../Botao"
import { StyledHeader } from "./styles"

const navList = [
	{ name: "Início", path: "/" },
	{ name: "Sobre", path: "./sobre" },
	{ name: "Envolvidos", path: "./equipe" },
	{ name: "Contato", path: "./contato" },
]

export default function Header(props) {
	const { height, width } = useWindowDimensions()
	const breakpointMobile = 1000
	const [menuShow, setMenuShow] = useState(false)

	return (
		<>
			<StyledHeader>
				<div
					className={`MaxWidthWrapper headerContainer ${
						width < breakpointMobile ? "mobileHeader" : ""
					}`}
				>
					<a href="/" className="logoContainer">
						{width > breakpointMobile ? (
							<img src={Logo} alt="Logo" />
						) : (
							<img src={LogoSmall} alt="Logo" />
						)}
					</a>
					{width > breakpointMobile ? (
						<>
							<nav>
								{navList.map((item, index) => (
									<a
										key={index}
										href={item.path}
										className={
											props.active == item.name ? "navItem active" : "navItem"
										}
									>
										{item.name}
									</a>
								))}
							</nav>
							<Botao href="./login">Login</Botao>
						</>
					) : (
						<>
							<div
								className={["hamburgerMenu", menuShow ? "show" : ""].join(" ")}
								onClick={() => setMenuShow((prev) => !prev)}
							>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div className={`mobileNav ${menuShow ? "show" : ""}`}>
								<nav>
									{navList.map((item, index) => (
										<a
											key={index}
											href={item.path}
											className={
												props.active == item.name
													? "navItem active"
													: "navItem"
											}
										>
											{item.name}
										</a>
									))}
								</nav>
								<Botao href="./login">Login</Botao>
							</div>
						</>
					)}
				</div>
			</StyledHeader>
			<div className="space"></div>
		</>
	)
}
