import anime from 'animejs';

//https://www.dyn-web.com/javascript/scroll-distance/
export const getScrollOffset = ():{x: number, y:number} => {
    var doc = document, w = window;
    var x, y, docEl;
    
    if ( typeof w.pageYOffset === 'number' ) {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
                doc.documentElement: doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return {x:x, y:y};
}

export const getElementPosY = (elem: string | HTMLElement):number | null => {
    let element:HTMLElement;
	if (typeof elem === 'string' || elem instanceof String) {
		let anchor = elem.charAt(0) === '#' ? elem.substring(1) : elem;
		element = document.getElementById(anchor as string) as HTMLElement;
    }
    else {
        element = elem
    }
	if(element) {
		var rect = element.getBoundingClientRect();
		var scrollTop = getScrollOffset().y
		
		return rect.top + scrollTop;
	}
	return null;
}

type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;

export const scrollToAnchor = (anchor: string, duration?: number, completeCallback?: AnimeCallbackFunction):anime.AnimeInstance => {
	let offsetFromTop = getElementPosY(anchor);

	let d = duration || 700;
	
	const scrollCoords = {
		y: window.pageYOffset
	}
	return anime({
		targets: scrollCoords,
		y: offsetFromTop,
		duration: d,
		easing: 'easeInOutCubic',
		update: () => window.scroll(0, scrollCoords.y),
		complete: completeCallback as AnimeCallbackFunction
	})
}