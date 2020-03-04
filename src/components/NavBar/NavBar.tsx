import React, { useState, useRef, useEffect } from 'react'
import {
    Nav,
    NavItems,
    NavHeaderStyled,
    CurrentLinkProperties,
    CurrentItem
} from './styles'

import NavItem from './NavItem'

import {scrollToAnchor} from '@utils/scrollHelpers'
import {useScrollWatcher, AnchorPoint} from '@utils/simpleScrollWatch'
import {useSectionScrollWatcher} from '@utils/sectionScrollWatcher'
import sections from '@sections/sections'
import useEventListener from '@utils/useEventListener'
import debounce from '@utils/debounce'

const NavBar:React.FC<{}> = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [pastNavAnchor, setPastNavAnchor] = useState<boolean>(false)
    const [pastHomeSection, setPastHomeSection] = useState<boolean>(false)
    const [currentLinkSettings, setCurrentLinkSettings] = useState<CurrentLinkProperties>({
        rightPos: -200,
        width: 100
    })

    const getNavAnchorOffset = ():number => (-( navRef.current ? navRef.current.offsetHeight : 0))
    useScrollWatcher("#home", AnchorPoint.Bottom, getNavAnchorOffset, (triggered: boolean) => {
        setPastNavAnchor(triggered);
        return !triggered;
    }) 
    useScrollWatcher("#about", AnchorPoint.Top, 0, (triggered: boolean) => {
        setPastHomeSection(triggered);
        return !triggered;
    }) 
    const [currentAnchor, setCurrentAnchor] = useSectionScrollWatcher(getNavAnchorOffset)
    const scrollToTop = (e: React.MouseEvent) => {
		e.preventDefault();
        scrollToAnchor('#home');
        setCurrentAnchor('home')
    }

    const moveBoxToCurrentLink = () => {
        let navLinks:HTMLCollection = (navRef.current as HTMLDivElement).getElementsByClassName('nav_link');
        let currentLink:HTMLLinkElement = Array.from(navLinks).find((elem) =>  (elem as HTMLAnchorElement).hash === ("#" + currentAnchor)) as HTMLLinkElement;
        if(currentLink) {
			let left = currentLink.offsetLeft;
			let right = (navRef.current as HTMLDivElement).offsetWidth - left;
			let width = currentLink.offsetWidth;
            setCurrentLinkSettings({
                rightPos: right - width,
                width: width
            })
		}
		else {
            setCurrentLinkSettings({
                rightPos: -200,
                width: currentLinkSettings.width
            })
		}
    }
    useEventListener('resize', debounce(moveBoxToCurrentLink, 250))
    useEffect(() => {
        moveBoxToCurrentLink();
    }, [currentAnchor])
    return (
        <>
            <a href="#home" onClick={scrollToTop}>
                <NavHeaderStyled sticky={pastHomeSection}>Ryan Feigenbaum</NavHeaderStyled>
            </a>
            <Nav ref={navRef} sticky={pastNavAnchor}>
                <CurrentItem {...currentLinkSettings} />
                <NavItems>
                    {
                        sections.map(section => <NavItem key={section.anchor} setCurrentAnchor={setCurrentAnchor} isSelected={section.anchor === currentAnchor} anchor={section.anchor}>{section.displayText}</NavItem>)
                    }
                </NavItems>
            </Nav>
        </>
    )
}

export default NavBar