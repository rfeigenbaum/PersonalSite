module.exports = {
	siteMetadata: {
		title: `Ryan Feigenbaum`,
		description: `An exceptionally creative and dependable developer with a focus in web application development.`,
		author: `Ryan Feigenbaum`,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-less`,
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				components: `${__dirname}/src/components`,
				utils: `${__dirname}/src/utils`
			}
		},
		`gatsby-plugin-react-helmet`,
		{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `images`,
			path: `${__dirname}/src/images`,
		},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
			// Add any options here
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data`,
				commonmark: false,
				name: "markdown-pages",
				plugins: ['remark-breaks']
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: `${__dirname}/src`,
				components: `${__dirname}/src/components`,
				sections: `${__dirname}/src/sections`,
				utils: `${__dirname}/src/utils`
				//src: path.join(__dirname, 'src'),
				//components: path.join(__dirname, 'src/components'),
				//sections: path.join(__dirname, 'src/sections')
			}
		}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  	],
}
