import React from "react"
import { StyledFooter } from "./styles"
import Logo from "../../assets/logo.png"

export default function Footer() {
	return (
		<StyledFooter>
			<div className="MaxWidthWrapper">
				<div className="FooterContent">
					<div className="FooterLogo">
						<img src={Logo} alt="Logo" />
					</div>
				</div>
			</div>
			<hr />
			<div className="copy">
				<p>© 2022 Plataforma Cacau. Todos os direitos reservados.</p>
				<p>
					Desenvolvido por{" "}
					<a href="https://ilrocha.com">Igor Rocha</a>
				</p>
			</div>
		</StyledFooter>
	)
}
