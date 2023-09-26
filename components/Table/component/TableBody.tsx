import Checkbox from "@/components/CheckBox/Checkbox";
import React from "react";
import { TableBodyProps } from "./interfaces";
import { CopyIcon } from "@/image/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import OutlineSelect from "@/components/Select/outline";
import { options } from "../index.config";
import { inter } from "@/styles/fonts";

const TableBody: React.FC<TableBodyProps> = ({
  sortedRows,
  selectedRows,
  handleCheckboxChange,
  updateRowsInTable,
  setState,
  title
}) => {
  return (
    <tbody className={`overflow-y-auto `}>
      {sortedRows.map((item, key) => {
        return (
          <tr key={key} className={`${inter.className} h-12 text-black-400 text-sm`} >{
            title.map(({ key }) => {
              if (key === 'check') {
                return <td key={key}>
                  <Checkbox
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
              }
              if (key === 'email') {
                return <td key={key}> <span className=" cursor-pointer">{item.email}</span></td>
              }
              if (key === 'phone') {
                return <td key={key}> <span className="cursor-pointer">{item.phone}</span></td>
              }
              if (key === 'sum') {
                return <td key={key}> <span className=" cursor-pointer">{item.sum}</span></td>
              }
              if (key === 'name') {
                return <td key={key}> <span className="cursor-pointer">{item.name}</span></td>
              }
              if (key === 'type') { return <td key={key}> <span className=" cursor-pointer">{item.type}</span></td> }
              if (key === 'date') {
                return <td key={key}> <span className=" cursor-pointer">{item.date}</span></td>
              }
              if (key === 'address') { return <td key={key}> <span className=" cursor-pointer">{item?.address?.city}</span></td> }

              if (key === 'status') {
                return <td key={key}>
                  {item.status === "Completed" ? (
                    <td>
                      <span className="text-success bg-[#32936F29] py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {" "}
                        {item.status}
                      </span>{" "}
                    </td>
                  ) : item.status === "Pending" ? (
                    <td>
                      {" "}
                      <span className="text-black bg-secondary-300 py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {item.status}{" "}
                      </span>
                    </td>
                  ) : item.status === "In-Progress" ? (
                    <td>
                      {" "}
                      <span className="text-primary-0 bg-primary-100 py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {item.status}
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className="text-danger bg-[#fcd8d6] py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {" "}
                        {item.status}{" "}
                      </span>
                    </td>
                  )}
                </td>
              }
              if (key === 'action') {
                return <td key={key}>  <div className="bg-[#5E636614] rounded-lg text-xs px-2 py-1 whitespace-nowrap">
                  <OutlineSelect
                    name={item.action ?? ''}
                    handleChangeFc={updateRowsInTable}
                    options={options}
                    id={item.id}
                    className=""
                  />
                </div></td>
              }
              if (key === 'track') {
                return <td key={key}> <span className="flex items-center justify-center h-full">
                  {item.track}
                  <CopyToClipboard
                    text={item.track ?? ''}
                    onCopy={(e) => {
                      toast("Tracking ID Copied", { theme: "light" });
                      setState({ value: item.track ?? '', copied: true });
                    }}
                  >
                    <span className="cursor-pointer pl-2">
                      <CopyIcon />
                    </span>
                  </CopyToClipboard>
                </span></td>
              }
            })
          }
          </tr>
        )
      })}
    </tbody>

  );
};

export default TableBody;
