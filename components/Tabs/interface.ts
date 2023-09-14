export interface ITab {
    label: string;
    content: JSX.Element;
}

export interface ITabsProps {
    tabs: ITab[];
    defaultTab: number;
}
