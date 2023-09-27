import { title } from './../index.config';
import { Column, Copy, Row } from "../interface";

export interface TableHeaderProps {
  title: Column[]; // Assuming you have a type 'Column' for columns
  handleSort: (columnKey: string) => void;
  checkAll: boolean;
  handleCheckboxChangeAll: () => void;
}

export interface TableBodyProps {
  sortedRows: Row[]; // Replace YourRowType with the actual type for rows
  selectedRows: number[];
  handleCheckboxChange: (id: number) => void;
  setState: (e: Copy) => void;
  updateRowsInTable: (
    e: React.ChangeEvent<HTMLSelectElement>,
    id?: number,
  ) => void;
  title: Column[];
  path: string;
}
