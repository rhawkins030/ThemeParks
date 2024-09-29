export function rgbComponentHex(c: number) : string {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(rgb: Array<Number>) : string {
    let s = "#";
    rgb.forEach(r => {
        s += rgbComponentHex(r)
    })
    return s;
}