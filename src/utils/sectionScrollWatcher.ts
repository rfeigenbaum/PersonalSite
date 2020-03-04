import {useState, useRef, useEffect} from 'react'

import {getElementPosY, getScrollOffset} from './scrollHelpers'

import debounce from './debounce'
//import throttle from './throttle'
import throttle from 'lodash.throttle'

interface Section {
    top: number
    anchor: string
}

export const useSectionScrollWatcher = (navOffset: Function):[string, React.Dispatch<React.SetStateAction<string>>] => {
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [currentAnchor, setCurrentAnchor] = useState<string>("home");

    const sections = useRef<Section[] | null>(null);

    const onScroll = (event?: Event) => {
        let scrollPos = getScrollOffset().y
        let currentSectionPositions = sections.current

        if(currentSectionPositions && currentSectionPositions.length > 0){
            let currentSectionIndex = currentSectionPositions.findIndex((section) => section.top + navOffset() <= scrollPos);
            if(currentSectionIndex >= 0) {
                if(currentSectionPositions[currentSectionIndex].anchor === "about") {
                    currentSectionIndex = currentSectionPositions.findIndex((section) => section.top <= scrollPos);
                }
                setCurrentAnchor(currentSectionPositions[currentSectionIndex].anchor);
                //console.log(currentSectionPositions[currentSectionIndex].anchor)
            }
        }
    }

    let resizeFunction = debounce(function() {
        sections.current = getSections()
        onScroll();
    }, 250)

    

    useEffect(() => {
        if(isInitialized === false){
            sections.current = getSections();
            window.addEventListener('scroll', throttle(onScroll, 10));
            window.addEventListener('resize', resizeFunction);
            onScroll();
        }
    }, [isInitialized])

    return [currentAnchor, setCurrentAnchor];
}

const getSections = ():Section[] => {
    let sections = document.getElementsByClassName('section');
    return Array.from(sections).map((section):Section => ({
        anchor: section.id,
        top: getElementPosY(section.id) as number
    })).sort((a, b) => b.top - a.top)
}