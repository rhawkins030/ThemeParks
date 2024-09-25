export default eventHandler(async (event) => {
    return await $fetch(useRuntimeConfig(event).UNIVERSALORLANDO_ASSET+`wait-time/wait-time-attraction-list.json`)
})