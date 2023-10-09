import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CDatePicker = ({ values, setFieldValue, type }: any) => {
    return (
        <DatePicker
            className="w-full bg-black-950 rounded-md min-h-[48px] px-3 focus:border-0 border-0"
            onChange={(e) => setFieldValue(type, e)}
            selected={values.date}
        />
    )
};

export default CDatePicker;
