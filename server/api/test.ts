import { WaltDisneyWorldParkID, testWDW } from "~/types/WDW"

export default eventHandler(async (event) => {
    return await testWDW(event, WaltDisneyWorldParkID.Magic_Kingdom)
})