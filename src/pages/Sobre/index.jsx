import React from "react"
import Botao from "../../components/Botao"
import Layout from "../../components/Layout"

import bgSobre from "../../assets/bgSobre.png"
import cacauicultor from "../../assets/cacauicultor.png"
import aplicativo from "../../assets/mockupCelular.png"

import { StyledSobre } from "./styles"
import { Icon } from "@iconify/react"

const funcionalidades = [
	{
		titulo: "Mapa em Tempo Real",
		descricao: "Tenha uma visão em tempo real de todos os pontos amostrais registrados.",
		icon: "akar-icons:map",
	},
	{
		titulo: "Registro de Estratos",
		descricao: "Registre os Estratos por rótulo e tenha um melhor controle.",
		icon: "akar-icons:globe",
	},
	{
		titulo: "Registro de Ponto Amostral",
		descricao:
			"Durante o registro de um Ponto Amostral, você tem a possibilidade de vincular a área a um Período Agrícola, Propriedade e muito mais.",
		icon: "eva:pin-fill",
	},
	{
		titulo: "Cadastro de Propriedades",
		descricao: "Cadastre e gerencie suas propriedades de forma simplificada e intuitiva.",
		icon: "codicon:home",
	},
	{
		titulo: "Cadastro de Usuários",
		descricao:
			"A plataforma AgroCacau possui uma ferramenta de cadastro de usuário e controle de acesso, dando mais segurança aos seus dados.",
		icon: "bi:people-fill",
	},
	{
		titulo: "Gerar Relatórios",
		descricao:
			"Tenha acesso a relatórios em arquivo Excel ou PDF, a partir dos dados registrados na plataforma.",
		icon: "carbon:document",
	},
]

export default function Sobre() {
	return (
		<Layout header="Sobre">
			<StyledSobre>
				<div className="MaxWidthWrapper">
					<main>
						<div className="info">
							<h1>
								Sistema de <strong>gestão do plantio</strong> do Cacau
							</h1>
							<p>Plataforma integrada para controle e análise do cultivo do cacau</p>
							<Botao>Saiba mais</Botao>
						</div>
						<div className="mainImage">
							<img src={bgSobre} alt="" />
						</div>
					</main>
					<section>
						<h1>
							Plataforma<strong>Cacau</strong>
						</h1>
						<div className="contentSobre">
							<div className="image">
								<img src={cacauicultor} alt="" />
							</div>
							<div className="text">
								<p>
									PlataformaCacau é um sistema computacional que tem por objetivo{" "}
									<b>armazenar dados de coletas</b> dos <b>eventos fenológicos</b>{" "}
									(lançamento foliar, floração, produção por planta) e dos{" "}
									<b>fatores do componente ambiente</b> do <b>cultivo do cacau</b>{" "}
									(manejo, pragas, doenças, chuva, temperatura do ar, vento) além
									de permitir a <b>consulta destes dados</b> mediante emissão de
									relatórios.
								</p>
								<p>
									É um projeto que surgiu na <b>CEPLAC</b> (Comissão Executiva do
									Plano da Lavoura Cacaueira) em parceria com a Universidade
									Estadual de Santa Cruz (UESC) e tem por objetivos promover a{" "}
									<b>valorização</b> do setor da cacauicultura nacional e
									propiciar meios de mudanças de parâmetros do comportamento do
									agricultor, proporcionando dados para{" "}
									<b>informações estatísticas</b> e sendo fonte de pesquisas para
									a <b>melhoria da agricultura cacaueira</b> e por consequência do
									seu agricultor.
								</p>
							</div>
						</div>
					</section>
					<section>
						<h1>
							Funcionalidades da Plataforma<strong>Cacau</strong>
						</h1>
						<div className="listaFuncionalidades">
							{funcionalidades.map((funcionalidade, index) => (
								<div className="funcionalidade" key={index}>
									<div className="icon">
										<Icon icon={funcionalidade.icon} />
									</div>
									<div className="text">
										<h2>{funcionalidade.titulo}</h2>
										<span className="division"></span>
										<p>{funcionalidade.descricao}</p>
									</div>
								</div>
							))}
						</div>
					</section>
					<section>
						<div className="aplicativo">
							<div className="text">
								<h1>Aplicação Mobile</h1>
								<p>
									O nosso aplicativo mobile se conecta com a{" "}
									<b>
										Plataforma<strong>Cacau</strong>
									</b>{" "}
									com a finalidade de receber dados do{" "}
									<b>desenvolvimento de frutos de cacau</b> em roças e enviar
									estes dados para o{" "}
									<b>
										Plataforma<strong>Cacau</strong>
									</b>
									. Esses dados, posteriormente, podem ser usados na{" "}
									<b>previsão de safras de cacau, alerta fitossanitário</b>, etc.
								</p>
								<ul>
									<li>
										Coleta de dados no contexto da{" "}
										<b>interação planta, solo e clima</b>.
									</li>
									<li>
										<b>Validação</b> da contagem de frutos da coleta.
									</li>
									<li>
										Matriz de Transição, onde se faz possível registrar o{" "}
										<b>desenvolvimento do fruto</b> ao longo do tempo.
									</li>
								</ul>
							</div>
							<div className="image">
								<img src={aplicativo} alt="Aplicativo" />
								<span style={{ "--index": 1 }} className="circle"></span>
								<span style={{ "--index": 2 }} className="circle"></span>
								<span style={{ "--index": 3 }} className="circle"></span>
								<span style={{ "--index": 4 }} className="circle"></span>
							</div>
						</div>
					</section>
					<section>
						<h1>
							Como a Plataforma<strong>Cacau</strong> e o aplicativo se integram?
						</h1>

						<div className="integracao">
							<div className="integracaoIcons">
								<div className="integracaoIcon">
									<Icon icon="clarity:mobile-phone-solid" />
								</div>
								<div className="integracaoIcon">
									<Icon icon="akar-icons:filter" />
								</div>
								<div className="integracaoIcon">
									<Icon icon="codicon:graph" />
								</div>
							</div>
							<div className="integracaoTexts">
								<div className="integracaoText">
									<h2>Coleta de dados</h2>
									<p>
										O aplicativo, composto de um formulário matriz, é
										estruturado para coleta dos dados com base em amostragem
										estratificada. Os dados capturados compõem-se de diversas
										variáveis, como por exemplo, condições do tempo e nível de
										infecção dos frutos.
									</p>
								</div>
								<div className="integracaoText">
									<h2>Filtragem de Dados</h2>
									<p>
										A partir da coleta, os dados passam por uma crítica, usando
										como regra um cálculo desenvolvido por nosso time de
										especialistas. Trazendo maior confiabilidade aos resultados
										que serão apresentados posteriormente.
									</p>
								</div>
								<div className="integracaoText">
									<h2>Resultados</h2>
									<p>
										Por fim, o aplicativo gera resultados organizados no painel
										do sistema web, que podem ser exportados no formato de
										arquivo desejado (como PDF ou Excel).
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</StyledSobre>
		</Layout>
	)
}
