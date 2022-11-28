import { Icon } from "@iconify/react"
import React from "react"
import Layout from "../../components/Layout"
import { StyledContato } from "./styles"
import Mapa from "../../assets/map.png"
import Botao from "../../components/Botao"

export default function Contato() {
	return (
		<Layout>
			<div className="MaxWidthWrapper">
				<StyledContato>
					<h1>Vamos manter contato!</h1>
					<p>Entre em contato para saber mais sobre o sistema ou para pedir ajuda.</p>
					<div className="contatoWrapper">
						<div className="info">
							<p>
								Preencha o formulário a seguir e o nosso time{" "}
								<b>entrará em contato</b> dentro de <b>24 horas</b>.{" "}
							</p>
							<p>
								Se preferir, você pode nos contatar também através dos meios
								listados abaixo:
							</p>
							<div className="contatos">
								<a className="contato" href="tel:5573988885555">
									<div className="icon">
										<Icon icon="ant-design:phone-filled" />
									</div>
									<span>+55 73 9 8888-5555</span>
								</a>
								<a className="contato" href="mailto:plataformacacau@uesc.br">
									<div className="icon">
										<Icon icon="fa-solid:envelope" />
									</div>
									<span>plataformacacau@uesc.br</span>
								</a>
							</div>
							<div className="map">
								<img src={Mapa} alt="Mapa da UESC" />
							</div>
						</div>
						<div className="form">
							<form action="">
								<div className="nome">
									<input
										type="text"
										name="nome"
										id="inputNome"
										placeholder="Nome"
									/>
									<input
										type="text"
										name="sobreNome"
										id="inputSobreNome"
										placeholder="Sobrenome"
									/>
								</div>
								<input
									type="email"
									name="email"
									id="inputEmail"
									placeholder="Email"
								/>
								<input
									type="text"
									name="telefone"
									id="inputTelefone"
									placeholder="Telefone"
								/>
								<input
									type="text"
									name="assunto"
									id="inputAssunto"
									placeholder="Assunto"
								/>
								<textarea
									name="mensagem"
									id="inputMensagem"
									cols="30"
									rows="10"
									placeholder="Mensagem"
								></textarea>
								<Botao>Enviar mensagem</Botao>
							</form>
						</div>
					</div>
				</StyledContato>
			</div>
		</Layout>
	)
}
