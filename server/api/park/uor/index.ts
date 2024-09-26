import { H3Event } from 'h3';

async function load(event: H3Event){
    const data: any = ThemeParkFetch(useRuntimeConfig(event).UNIVERSALORLANDO_ASSET)

    return data;
}

export default eventHandler((event) => {
    return load(event);
})