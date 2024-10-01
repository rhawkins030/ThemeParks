import { WaltDisneyWorldParkID, toDisneyWorld } from "~/types/WDW"

export default eventHandler(async (event) => {
    return await $fetch(useRuntimeConfig(event).WALTDISNEYWORLD_FACILITY + toDisneyWorld(WaltDisneyWorldParkID.Magic_Kingdom), {
        method: 'GET',
        headers: {
            'X-App-Id': 'WDW-MDX-ANDROID-3.4.1',
            'X-Correlation-ID': '1695746348000',
            'Authorization': `Bearer fsjfdjdsfhjdfkjshdfk`,
            'Accept': '*/*'
        },
        ignoreResponseError: true,
    })
})