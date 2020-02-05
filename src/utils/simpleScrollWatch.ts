import { useState, useRef, useEffect, useCallback } from 'react';

import {getElementPosY, getScrollOffset} from './scrollHelpers'

export enum AnchorPoint {
    Top = 0,
    Bottom = 1
}

type ScrollWatcherFunction = (pastTriggerPoint: boolean) => boolean
type anchorOffsetFunction = () => number

export const useScrollWatcher = (anchor: string, anchorPoint: AnchorPoint | number, anchorOffset: number | anchorOffsetFunction, callback: ScrollWatcherFunction) => {
	const scrollWatcher = useRef<SimpleScrollWatcher>();
	useEffect(
		() => {
			scrollWatcher.current = new SimpleScrollWatcher(anchor, anchorPoint, anchorOffset, callback);

			return () => {
				scrollWatcher.current?.destructure();
			}
		},
		[anchor]
	) 
}

export default class SimpleScrollWatcher {
    anchor: string 
    anchorPoint: AnchorPoint | number
    anchorOffset: number | Function
    callback: Function

    isTriggered: Boolean

    targetPosition: number

    constructor(anchor: string, anchorPoint: AnchorPoint | number, anchorOffset: number | anchorOffsetFunction, callback: ScrollWatcherFunction) {
        this.anchor = anchor.charAt(0) === '#' ? anchor.substring(1) : anchor;
		this.anchorPoint = anchorPoint;
		this.anchorOffset = anchorOffset;
		this.callback = callback;

		this.isTriggered = false;
		
		this.updateTargetPosition();

		this.scrolled();

		window.addEventListener('scroll', this.scrolled);
		window.addEventListener('resize', this.updateAll);
		document.addEventListener("DOMContentLoaded", this.updateAll);
	}

	destructure = () => {
		window.removeEventListener('scroll', this.scrolled);
		window.removeEventListener('resize', this.updateAll);
		document.removeEventListener("DOMContentLoaded", this.updateAll);
	} 
	
	updateAll = () => {
		this.updateTargetPosition();
		this.scrolled();
	}

    updateTargetPosition = () => {
		let {anchor, anchorPoint, anchorOffset} = this;
		let elem = document.getElementById(anchor)
        if(elem) {
            let anchorDistanceFromTop = getElementPosY(elem);
            let distanceFromTopOfAnchor = elem.offsetHeight * anchorPoint;

            let aOffset = typeof anchorOffset === "function" ? anchorOffset() : anchorOffset;
            
            this.targetPosition = (anchorDistanceFromTop as number) + distanceFromTopOfAnchor + aOffset;
        }
		
	}

	scrolled = () => {
		if(getScrollOffset().y >= this.targetPosition && this.isTriggered) {
			this.isTriggered = this.callback(true)
		}
		else if(getScrollOffset().y <= this.targetPosition && !this.isTriggered){
			this.isTriggered = this.callback(false)
		}
	}
}