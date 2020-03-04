import React, { useState, useRef } from 'react'
import {
    Nav,
    NavItems,
    NavItem_ListItem,
    NavItem_Link,
    NavHeaderStyled
} from './styles'

import {scrollToAnchor} from '@utils/scrollHelpers'

interface NavItemProps {
    anchor: string
    children?: React.ReactNode
    isSelected: boolean
    setCurrentAnchor: React.Dispatch<React.SetStateAction<string>>
}

const NavItem:React.SFC<NavItemProps> = ({
    anchor,
    children,
    isSelected,
    setCurrentAnchor
}) => {
    const onClick = (e: React.MouseEvent) => {
		e.preventDefault();
        scrollToAnchor(anchor);
        setCurrentAnchor(anchor)
	}
    return (
        <NavItem_ListItem>
            <NavItem_Link isSelected={isSelected} className="nav_link" href={"#" + anchor} onClick={onClick}>{children}</NavItem_Link>
        </NavItem_ListItem>
    )
}

export default NavItem