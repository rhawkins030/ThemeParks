export interface CacheList {
    id: string
    url: string
}

export function getDataById(array: Array<{ id: string; data: string }>, id: string): any | null {
    const found = array.find(item => item.id === id);
    return found ? found.data : null;
}

export class ThemeCache {
    private url: CacheList[];
    private data: any[];

    constructor(url: CacheList[]){
        this.url = url;
    }

    public start() {
        let sdat: any[];
        this.url.forEach(async ur => {
            const data = $fetch(ur.url);
            sdat.push({
                id: ur.id,
                data: data
            });
        })
        this.data = sdat;
        setTimeout(this.start, 5*60*1000);
    }

    public get(key: string): any | null {
        return getDataById(this.data, key);
    }
}