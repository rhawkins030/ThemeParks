import { H3Event } from 'h3';
import { ThemeParkGeneral, ThemeParkInfo } from '~/types/ThemePark';
import { createMeta, metaExists } from '~/utils/data';


async function load(event: H3Event){
    let dat: ThemeParkGeneral = {
        name: `Universal Studios Florida`,
        id: `uor.usf`,
        hours: [],
    }
    const data: any = await ThemeParkFetch(useRuntimeConfig(event).UNIVERSALORLANDO_SERVICE)
    const service = data.Results[1]
    dat.name == service.MblDisplayName;
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

    return dat;
}

export default eventHandler((event) => {
    return load(event);
})