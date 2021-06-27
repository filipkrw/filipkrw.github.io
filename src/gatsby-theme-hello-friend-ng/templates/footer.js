import React from "react"
import Footer from "gatsby-theme-hello-friend-ng/src/components/partials/footer"

const FooterTemplate = () => {
	const today = new Date()

	return (
		<Footer>
			<span>&copy; {today.getFullYear()}</span>
			<span>
				<a href="https://github.com/filipkrw">Filip Krawczyk</a>
			</span>
			<span>
				<a href="https://www.gatsbyjs.com/">Gatsby</a>
			</span>
		</Footer>
	)
}

export default FooterTemplate