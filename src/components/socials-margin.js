import React from 'react'
import Socials from 'gatsby-theme-hello-friend-ng/src/components/partials/socials'
import styled from 'styled-components'

const MarginTop = styled.div`
	margin: 36px 0;
`

export default function SocialsMargin(props) {
	return (
		<MarginTop>
			<Socials {...props} />
		</MarginTop>
	)
}