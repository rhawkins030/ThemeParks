import { generateDisneyAuthenticationCode } from "~/types/WDW"

export default eventHandler(async (event) => {
    return await generateDisneyAuthenticationCode(event);
})