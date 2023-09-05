export interface Row {
    id: number;
    name: string;
    date: string;
    type: string;
    track: string;
    sum: string;
    action: string;
    status: string;
};

export interface Column {
    text: string,
    key: string
}

export interface Copy {
    value: string,
    copied: boolean
}