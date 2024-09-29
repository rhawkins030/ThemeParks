import { RGBDisneyToHex } from '~/types/WDW'

export default eventHandler((event) => {
    return RGBDisneyToHex(`<span style="color: rgb(84, 84, 84); background-color: rgb(235, 235, 228);">es_US, es-ar, es-mx, es-pe, es-cl, es-co</span>`)
})