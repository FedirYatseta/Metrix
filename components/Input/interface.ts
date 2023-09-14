
export interface IInput {
    id: number;
    icon: JSX.Element;
    type: string;
    name: string;
    label: string;
    placeholder: string;

    touched?: {
        [key: string]: boolean;
    };
    errors?: {
        [key: string]: string;
    };
};
