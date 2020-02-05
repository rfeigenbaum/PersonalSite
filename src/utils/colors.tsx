export const Colors = {
    darkGrey: "#222831",
    grey: "#393e46",
    teal: "#00adb5",
    lightGrey: "#eeeeee",
    white: "#FFF",
    black: "#000"
}

export const hexToRGB = (hex:string, alpha?:Number) => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
