import React from "react"
import Footer from "../Footer"
import Header from "../Header"

export default function Layout(props) {
	return (
		<>
			<Header active={props.header} />
			{props.children}
			<Footer />
		</>
	)
}
