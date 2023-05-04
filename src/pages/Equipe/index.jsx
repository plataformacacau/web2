import { Icon } from "@iconify/react"
import React from "react"
import Layout from "../../components/Layout"
import { StyledEquipe } from "./styles"

const equipe = [
	{
		nome: "Lindolfo Pereira",
		cargo: "Colaborador",
		foto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
		descricao: "CEPLAC (Comissão Executiva do Plano da Lavoura Cacaueira)",
	},
	{
		nome: "Jauberth Abijaude",
		cargo: "Colaborador",
		foto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
		descricao: "Departamento de Ciências Exatas e Tecnológicas (DCET)",
	},
	{
		nome: "Marta Magda Dornelles",
		cargo: "Coordenadora",
		foto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
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
		foto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
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
		foto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
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
		foto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
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
		foto: "https://github.com/igorroc.png",
		descricao: "Aluno do curso de Ciência da Computação da UESC",
		links: [
			{
				link: "https://www.linkedin.com/in/igorroc/",
				icon: "akar-icons:linkedin-box-fill",
			},
			{
				link: "https://github.com/igorroc",
				icon: "akar-icons:github-fill",
			},
			{
				link: "https://ilrocha.com",
				icon: "akar-icons:globe",
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
