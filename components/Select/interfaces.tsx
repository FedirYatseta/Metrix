export interface OptionsSelect {
    value: string,
    label: string
}


export interface CountryData {
    [key: string]: {
        name: string;
        region: string;
        timezones: {
            [key: string]: string;
        };
        iso: {
            'alpha-2': string;
            'alpha-3': string;
            numeric: string;
        };
        phone: string[];
        emoji: string;
        image: string;
    };
}