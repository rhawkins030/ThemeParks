export default eventHandler(async (event) => {
    return await $fetch('https://assets.universalparks.com/uor/wait-time/wait-time-attraction-list.json')
})