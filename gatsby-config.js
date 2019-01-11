module.exports = {
	pathPrefix: '/gatsby-i18n/gatsby-starter-lingui',
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/locales`,
				name: `locale`,
			},
		},
		{
			resolve: '@wapps/gatsby-plugin-lingui',
			options: {
				availableLngs: ['en', 'pt'],
				fallbackLng: 'en',
				siteUrl: 'https://example.com/',
			},
		},
		'gatsby-plugin-offline'
	],
}
