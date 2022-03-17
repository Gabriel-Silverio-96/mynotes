const rgbToHex = (rgb: string) => {    
    const rgbList = rgb.slice(4, -1).split(", ");
    return '#' + rgbList.map(rgb => {
        const hex = Number(rgb).toString(16)
        return hex.length === 1 ? "0" + hex : hex
    }).join("")
}

export default rgbToHex;