import React from "react"
import './style.css'
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';

const CTimePicker = ({ values, setFieldValue }: any) => {
    return (
        <TimePicker
            className="w-full bg-black-950 rounded-md min-h-[48px] border-0"
            value={values.time}
            onChange={(e) => setFieldValue('time', e)} />
    )
};

export default CTimePicker;
