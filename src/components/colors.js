export const DARK_GREY = "#222831"
export const GREY = "#393e46"
// TODO: Confirm this color is actually considered teal
export const TEAL = "#00adb5"
export const LIGHT_GREY = "#eeeeee"
export const WHITE = "#FFF"
export const BLACK = "#000"

export const hexToRGB = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


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