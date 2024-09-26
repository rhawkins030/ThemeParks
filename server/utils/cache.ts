import type { CacheOptions } from "nitropack";

const commonOptions: CacheOptions = {
    group: "themeparks",
    swr: false,
    maxAge: 60 * 5,
    staleMaxAge: 60 * 10
}

const cacheOptions = (name: string): CacheOptions => ({
    ...commonOptions,
    name,
})

export const ThemeParkFetch = cachedFunction(async (url: string) => {
    const data = await $fetch(url)

    return data
}, {
    ...cacheOptions("ThemePark")
})