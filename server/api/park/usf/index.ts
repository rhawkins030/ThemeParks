import { H3Event } from 'h3';

interface ThemeParkInfo {
    name: string
    id: string
    hours?: ThemeParkHour[]
}

interface ThemeParkHour {
    date: string
    openTime: number
    closeTime: number
    earlyTime?: number
}

async function load(event: H3Event){
    let dat: ThemeParkInfo = {
        name: `Universal Studios Florida`,
        id: `uor.usf`,
        hours: [],
    }
    const data: any = await ThemeParkFetch(useRuntimeConfig(event).UNIVERSALORLANDO_SERVICE)
    const service = data.Results[1]
    service.Hours.forEach((hour) => {
        if(hour.EarlyEntryUnix == 0) {
            dat.hours.push({
                date: hour.Date,
                openTime: hour.OpenTimeUnix,
                closeTime: hour.CloseTimeUnix
            })
        } else {
            dat.hours.push({
                date: hour.Date,
                openTime: hour.OpenTimeUnix,
                closeTime: hour.CloseTimeUnix,
                earlyTime: hour.EarlyEntryUnix
            })
        }
    })
    // Universal is number 1 in array.



    return dat;
}

export default eventHandler((event) => {
    return load(event);
})