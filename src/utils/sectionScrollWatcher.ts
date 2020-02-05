import {useState, useRef, useEffect} from 'react'

import {getElementPosY, getScrollOffset} from './scrollHelpers'

import debounce from './debounce'
import throttle from './throttle'

interface Section {
    top: number
    anchor: string
}

export const useSectionScrollWatcher = ():[string, React.Dispatch<React.SetStateAction<string>>] => {
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [currentAnchor, setCurrentAnchor] = useState<string>("home");

    const sections = useRef<Section[] | null>(null);

    useEffect(() => {
        if(isInitialized === false){
            sections.current = getSections()
            onScroll();
            //console.log("setting sections")
        }
    }, [isInitialized])

    const onScroll = (event?: Event) => {
        let scrollPos = getScrollOffset().y
        let currentSectionPositions = sections.current as Section[]

        let currentSectionIndex = currentSectionPositions.findIndex((section) => section.top <= scrollPos);
        if(currentSectionIndex >= 0) {
            setCurrentAnchor(currentSectionPositions[currentSectionIndex].anchor);
            //console.log(currentSectionPositions[currentSectionIndex].anchor)
        }

    }

    window.addEventListener('mousewheel', throttle(onScroll, 10));
    window.addEventListener('DOMMouseScroll', throttle(onScroll, 10));

    let resizeFunction = debounce(function() {
        sections.current = getSections()
        console.log("resetting sections")
    }, 250)

    window.addEventListener('resize', resizeFunction);

    return [currentAnchor, setCurrentAnchor];
}

const getSections = ():Section[] => {
    let sections = document.getElementsByClassName('section');
    return Array.from(sections).map((section):Section => ({
        anchor: section.id,
        top: getElementPosY(section.id) as number
    })).sort((a, b) => b.top - a.top)
}