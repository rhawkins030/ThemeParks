import { rgbToHex } from '~/types/RGBHex'
import { H3Event } from 'h3';

export enum WaltDisneyWorldParkID {
    Magic_Kingdom = 80007944,
    Epcot = 80007838,
    Hollywood_Studios = 80007998,
    Animal_Kingdom = 80007823
}

export enum WaltDisneyWorldResortID {
    Magic_Kingdom = 80007798,
    Epcot = 80007798,
    Hollywood_Studios = 80007798,
    Animal_Kingdom = 80007798
}

export function toDisneyWorld(park: WaltDisneyWorldParkID, resort: WaltDisneyWorldResortID) : string {
    return `theme-parks/${park};destination=${resort}/`
}

export function RGBDisneyToHex(s: string) : null | string {
    const regex = /color:\s*([^;]+)/;
    const match = s.match(regex);
    let sw: any = match ? match[1].trim() : null;
    sw = sw.replace("rgb(", "").replace(")", "").split(", ")
    let ns: Array<Number> = [];
    sw.forEach(n => {
        ns.push(Number(n))
    })
    return rgbToHex(ns);
}

// this seems to be more than just WDW.
export async function generateDisneyAuthenticationCode(event: H3Event) : Promise<any> {
    const data: any = await $fetch(useRuntimeConfig(event).WALTDISNEYWORLD_AUTH, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*'
        },
        body: "grant_type=assertion&assertion_type=public&client_id=WDPRO-MOBILE.MDX.WDW.ANDROID-PROD"
    })

    return data.access_token;
}