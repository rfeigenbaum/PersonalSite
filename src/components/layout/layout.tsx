import React from 'react'

import './styles.scss'

interface Props {
	children?: any
}

const Layout:React.SFC<Props> = ({ children }) => {
	return (
		<>
			{children}
		</>
	)
}

export default Layout
