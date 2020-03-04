import {useRef, useEffect} from 'react'

//Credit: https://github.com/donavon/use-event-listener
export default function useEventListener(eventName:string, handler:Function, element?:Window){
    if(typeof window !== 'undefined' && element !== null) {
		element = window
	}
    // Create a ref that stores handler
    const savedHandler = useRef<Function | null>(null);
    
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(
      () => {
        // Make sure element supports addEventListener
        // On 
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        
        // Create event listener that calls handler function stored in ref
        const eventListener = (event:any) => (savedHandler.current as Function)(event);
        
		// Add event listener
		if(element) 
        	element.addEventListener(eventName, eventListener);
        
        // Remove event listener on cleanup
        return () => {
			if (element)
          		element.removeEventListener(eventName, eventListener);
        };

      },
      [eventName, element] // Re-run if eventName or element changes
    );
  };