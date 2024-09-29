import { H3Event } from 'h3';
import { ThemeParkInfo } from '~/types/ThemePark';
import { metaExists, loadMeta } from '~/utils/data';

async function load(event: H3Event){
    if(!metaExists("ioa")) {
        setResponseStatus(event, 500, "missing cache")
        return {id:"ioa",status:500,data:"missing cache"}
    }
    const dat: ThemeParkInfo = await loadMeta("ioa");
    const data: any = await ThemeParkFetch(useRuntimeConfig(event).UNIVERSALORLANDO_SERVICE)
    const service = data.Results[0]
    dat.hours = [];
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