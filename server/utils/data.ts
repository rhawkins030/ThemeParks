import fs from 'fs';
import path from 'path';
import { ThemeParkInfo } from '~/types/ThemePark';
const __dirname = process.cwd();
const defaultPath = path.join(__dirname, "data")

export function loadMeta(scene: string) : ThemeParkInfo | null {
    const sys = path.join(defaultPath, `${scene}`, `meta.json`);
    if(fs.existsSync(sys)) {
        let data: ThemeParkInfo = JSON.parse(fs.readFileSync(sys, 'utf-8'));
        return data;
    }
    return null;
}

export function metaExists(scene: string) : boolean {
    const sys = path.join(defaultPath, `${scene}`, `meta.json`);
    if(fs.existsSync(sys)) {
        return true;
    }
    return false;
}

export function createMeta(scene: string, data: ThemeParkInfo) {
    const sys = path.join(defaultPath, `${scene}`, `meta.json`);
    const anotherSys = path.join(defaultPath, `${scene}`);
    fs.mkdirSync(anotherSys);
    fs.writeFileSync(sys, JSON.stringify(data, null, 2));
}