export interface ThemeParkGeneral {
    id: string
    name: string
    hours?: ThemeParkHour[]
}

export interface ThemeParkHour {
    date: string
    openTime: number
    closeTime: number
    earlyTime?: number
}

export interface ThemeParkRide {
    id: string
    name: string
    status: string
    wait_time?: number;
}

export interface ThemeParkGPS {
    latitude: number
    longitude: number
}

export interface ThemeParkInfo {
    id: string
    name: string
    description: string
    hours?: ThemeParkHour[]
    gps?: ThemeParkGPS,
    color?: string
}