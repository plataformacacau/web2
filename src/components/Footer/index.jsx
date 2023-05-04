import React from "react"
import { StyledFooter } from "./styles"
import Logo from "../../assets/logo.png"
import LogoWhite from "../../assets/logo-branca.png"
import UESC from "../../assets/uesc.png"
import ceplac from "../../assets/ceplac.png"
import ima from "../../assets/ima.png"
import proex from "../../assets/proex.png"

export default function Footer() {
	return (
		<StyledFooter>
			<div className="MaxWidthWrapper">
				<div className="FooterContent">
					<div className="FooterSection info">
						<a className="logo" href="/">
							<img src={LogoWhite} alt="Logo" />
						</a>
						<p>Plataforma integrada para controle e análise do cultivo do cacau</p>
					</div>
					<div className="FooterSection">
						<h3>Realização</h3>
						<ul className="realizacao">
							<li>
								<a href="https://uesc.br">
									<img src={UESC} alt="" />
								</a>
							</li>
							<li>
								<a href="https://ceplac.com.br">
									<img src={ceplac} alt="" />
								</a>
							</li>
							<li>
								<a href="https://uesc.br">
									<img src={ima} alt="" />
								</a>
							</li>
							<li>
								<a href="https://uesc.br">
									<img src={proex} alt="" />
								</a>
							</li>
						</ul>
					</div>
					<div className="FooterSection sobre">
						<h3>Sobre nós</h3>
						<ul>
							<li>
								<a href="/">O projeto</a>
							</li>
							<li>
								<a href="/">Quem somos</a>
							</li>
							<li>
								<a href="/">Entre em contato</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr />
			<div className="copy">
				<p>© 2022 Plataforma Cacau. Todos os direitos reservados.</p>
				<p>
					Desenvolvido por <a href="https://ilrocha.com">Igor Rocha</a>
				</p>
			</div>
		</StyledFooter>
	)
}
