import React, { FC } from "react";
import Select from "react-select";
import { COUNTRIES } from "./config";

const customStyles = {
    control: (baseStyles: any) => (
        {
            ...baseStyles,
            minHeight: 0,
            padding: '0 10px',
        }
    ),
    indicatorsContainer: (baseStyles: any) => ({
        ...baseStyles,
        display: 'flex',
    }),
    menu: (baseStyles: any) => (
        {
            ...baseStyles,
            zIndex: 9999,
            background: '#fff',
            padding: '8px',
            fontSize: '12px',
            borderRadius: '8px',
            minWidth: 'max-content',
            border: '1px solid #cdcdcd'
        }
    ),
    option: (baseStyles: any) => ({
        ...baseStyles,
        padding: '5px',
        whiteSpace: 'nowrap',

        ":hover": {
            background: '#cdcdcd',
            borderRadius: '8px'
        }
    })
};


interface CountrySelectProps {
    id: string;
    name: string;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    errors: { [key: string]: string };
    touched: { [key: string]: boolean };
}


const CountrySelect: FC<CountrySelectProps> = ({ id, name, touched, errors, setFieldValue }) => {
    const handleCountryChange = (selectedOption: any) => {

        if (!selectedOption) return
        console.log('selectedOption', selectedOption)
        setFieldValue(name, selectedOption.value);
    };
    const options = Object.keys(COUNTRIES).map((countryCode) => {

        const country = COUNTRIES[countryCode];

        // console.log('country', country)
        return {
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={country.image}
                        alt={`${country.name} flag`}
                        style={{ width: '24px', marginRight: '8px' }}
                    />
                    {` (${country.phone[0]})`}
                </div>
            ),
            value: country.phone[0],
        };
    });


    return (
        <Select
            id={id}
            name={name}
            unstyled
            options={options}
            styles={customStyles}
            defaultValue={options[0]}
            onChange={handleCountryChange}
            className={`rounded-lg block py-3 mr-3 min-w-fit  focus-within:hover:bg-hov focus:outline-none ${(touched[name] && errors[name]) ? 'bg-[#FCF3F2B2]' : 'bg-black-950'}   `}
        />
    );
}

export default CountrySelect;