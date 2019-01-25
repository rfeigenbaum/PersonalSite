export const DARK_GREY = "#222831"
export const GREY = "#393e46"
// TODO: Confirm this color is actually considered teal
export const TEAL = "#00adb5"
export const LIGHT_GREY = "#eeeeee"
export const WHITE = "#FFF"
export const BLACK = "#000"

const ColorPairs = {
	darkGrey: {
		main: DARK_GREY,
		secondary: WHITE
	},
	grey: {
		main: GREY,
		secondary: WHITE
	},
	teal: {
		main: TEAL,
		secondary: LIGHT_GREY
	},
	lightGrey: {
		main: LIGHT_GREY,
		secondary: DARK_GREY
	}
}


export const getCompliment = (color) => 
	ColorPairs[Object.keys(ColorPairs).find((key) => ColorPairs[key].main === color)].secondary


export default ColorPairs;