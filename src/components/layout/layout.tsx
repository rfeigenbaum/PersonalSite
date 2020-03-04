import React from 'react'

import './styles.scss'
import SEO from '@components/seo'

interface Props {
	children?: any
}

const Layout:React.SFC<Props> = ({ children }) => {
	return (
		<>
			<SEO />
			{children}
		</>
	)
}

export default Layout
