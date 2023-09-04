import { Column } from "../interface";

export interface TableHeaderProps {
    title: Column[]; // Assuming you have a type 'Column' for columns
    handleSort: (columnKey: string) => void;
    checkAll: boolean;
    handleCheckboxChangeAll: () => void;
}