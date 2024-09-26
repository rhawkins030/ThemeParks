export default eventHandler((event) => {
    const park = getRouterParam(event, `park`)
    setResponseStatus(event, 404, "Unknown Theme Park")
    return {'id':park,'status':404}
})