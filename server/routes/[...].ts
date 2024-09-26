export default eventHandler((event) => {
    setResponseStatus(event, 404, "Unknown")
    return "Unknown"
})