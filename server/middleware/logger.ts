import { consola } from 'consola';

export default eventHandler((event) => {
    consola.info(`[${getResponseStatus(event)}]  ${event.method} - ${event.path}`)
})