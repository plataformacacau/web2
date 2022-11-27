import { Icon } from "@iconify/react"
import React from "react"
import Layout from "../../components/Layout"
import { StyledEquipe } from "./styles"

const equipe = [
	{
		nome: "Lindolfo Pereira",
		cargo: "Socio fundador",
		foto: "https://github.com/beatriz-ux.png",
		descricao: "CEPLAC (Comissão Executiva do Plano da Lavoura Cacaueira)",
	},
	{
		nome: "Renato Novaes",
		cargo: "Socio fundador",
		foto: "https://github.com/beatriz-ux.png",
		descricao: "CEPLAC (Comissão Executiva do Plano da Lavoura Cacaueira)",
	},
	{
		nome: "Marta Magda Dornelles",
		cargo: "Socio fundador",
		foto: "https://github.com/beatriz-ux.png",
		descricao: "Departamento de Ciências Exatas e Tecnológicas (DCET)",
		links: [
			{
				link: "https://linkedin.com",
				icon: "akar-icons:linkedin-box-fill",
			},
			{
				link: "https://github.com",
				icon: "akar-icons:github-fill",
			},
		],
	},
]

const equipeDev = [
	{
		nome: "Adriel Fabrício",
		cargo: "Desenvolvedor",
		foto: "https://github.com/beatriz-ux.png",
		descricao: "Aluno do curso de Ciência da Computação da UESC",
		links: [
			{
				link: "https://linkedin.com",
				icon: "akar-icons:linkedin-box-fill",
			},
			{
				link: "https://github.com",
				icon: "akar-icons:github-fill",
			},
		],
	},
	{
		nome: "Henrique Serra",
		cargo: "Desenvolvedor",
		foto: "https://github.com/beatriz-ux.png",
		descricao: "Aluno do curso de Ciência da Computação da UESC",
		links: [
			{
				link: "https://linkedin.com",
				icon: "akar-icons:linkedin-box-fill",
			},
			{
				link: "https://github.com",
				icon: "akar-icons:github-fill",
			},
		],
	},
	{
		nome: "Christian Menezes",
		cargo: "Desenvolvedor",
		foto: "https://github.com/beatriz-ux.png",
		descricao: "Aluno do curso de Ciência da Computação da UESC",
		links: [
			{
				link: "https://linkedin.com",
				icon: "akar-icons:linkedin-box-fill",
			},
			{
				link: "https://github.com",
				icon: "akar-icons:github-fill",
			},
		],
	},
	{
		nome: "Igor Rocha",
		cargo: "Desenvolvedor/Designer",
		foto: "https://github.com/beatriz-ux.png",
		descricao: "Aluno do curso de Ciência da Computação da UESC",
		links: [
			{
				link: "https://linkedin.com",
				icon: "akar-icons:linkedin-box-fill",
			},
			{
				link: "https://github.com",
				icon: "akar-icons:github-fill",
			},
		],
	},
]

export default function Equipe() {
	return (
		<Layout header="Envolvidos">
			<div className="MaxWidthWrapper">
				<StyledEquipe>
					<h1>Nosso time</h1>
					<p>
						Conheça as pessoas que fazem possível a plataforma PlataformaCacau ganhar
						vida.
					</p>
					<div className="Equipe">
						{equipe.map((membro, index) => (
							<div className="membro" key={index}>
								<div className="foto">
									<img src={membro.foto} alt={membro.nome} />
								</div>
								<h3 className="cargo">{membro.cargo}</h3>
								<h2 className="nome">{membro.nome}</h2>
								<p className="descricao">{membro.descricao}</p>
								{membro.links && (
									<div className="links">
										{membro.links.map((link, index) => (
											<a
												href={link.link}
												key={index}
												target="_blank"
												rel="noreferrer"
											>
												<Icon icon={link.icon} />
											</a>
										))}
									</div>
								)}
							</div>
						))}
					</div>
					<div className="EquipeDev">
						{equipeDev.map((membro, index) => (
							<div className="membro" key={index}>
								<div className="foto">
									<img src={membro.foto} alt={membro.nome} />
								</div>
								<h3 className="cargo">{membro.cargo}</h3>
								<h2 className="nome">{membro.nome}</h2>
								<p className="descricao">{membro.descricao}</p>
								<div className="links">
									{membro.links.map((link, index) => (
										<a
											href={link.link}
											key={index}
											target="_blank"
											rel="noreferrer"
										>
											<Icon icon={link.icon} />
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</StyledEquipe>
			</div>
		</Layout>
	)
}
