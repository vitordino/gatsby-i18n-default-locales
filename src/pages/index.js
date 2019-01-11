import React from 'react'
import { graphql } from 'gatsby'
import { withLingui } from '@wapps/gatsby-plugin-lingui'
import { Trans } from '@lingui/react'
import Switcher from '../components/Switcher'


const NotFoundPage = () => (
	<div>
		<h1>
			<Trans id='title'>welcome home</Trans>
		</h1>
		<p>
			<Trans id='paragraph'>just an <strong>example</strong> text</Trans>
		</p>
		<Switcher/>
	</div>
)

export default withLingui()(NotFoundPage)

export const query = graphql`
	query($lng: String!) {
		locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
			...LocaleFragment
		}
	}
`
