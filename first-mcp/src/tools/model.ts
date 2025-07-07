export interface RoutePeriods {
    firstFlightDate: string
    lastFlightDate: string
    monthsFromToday: number
    months: number
}

export interface Airport {
    code: string
    name: string
    seoName: string
    aliases: string[]
    base: boolean
    city: City
    region: Region
    country: Country
    coordinates: Coordinates
    timeZone: string
    macCity?: MacCity
}

export interface City {
    name: string
    code: string
    macCode?: string
}

export interface Region {
    name: string
    code: string
}

export interface Country {
    code: string
    iso3code: string
    name: string
    currency: string
    defaultAirportCode: string
    schengen: boolean
}

export interface Coordinates {
    latitude: number
    longitude: number
}

export interface MacCity {
    name: string
    code: string
    macCode: string
}
