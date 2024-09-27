import fs from 'fs';
import path from 'path';
import { ThemeParkGeneral } from '~/types/ThemePark';
const defaultPath = path.join(__dirname, "../../data")

export function loadMeta(scene: string) : ThemeParkGeneral | null {
    const sys = path.join(defaultPath, `${scene}`, `meta.json`);
    if(fs.existsSync(sys)) {
        let data: ThemeParkGeneral = JSON.parse(fs.readFileSync(sys, 'utf-8'));
        return data;
    }
    return null;
}