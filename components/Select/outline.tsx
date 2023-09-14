'use client'
import { Arr, ArrDown, FilterIcon } from "@/image/image";
import React, { ChangeEvent, useState } from "react"
import Select, { DropdownIndicatorProps, components } from 'react-select';
import { OptionsSelect } from "./interfaces";
type SelectType = {
    name: string
    options: OptionsSelect[]
    handleChangeFc: (e: ChangeEvent<HTMLSelectElement>, id?: number) => void
    id?: number
    className: string
}

type ColourOption = {
    value: string;
    label: string;
}

const DropdownIndicator = (
    props: DropdownIndicatorProps<ColourOption, true>
) => {
    return (
        <components.DropdownIndicator {...props}>
            <ArrDown />
        </components.DropdownIndicator>
    );
};
const OutlineSelect = ({ name, options, handleChangeFc, id, className }: SelectType) => {
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null); // Initialize with null or a default option

    const handleChange = (newValue: any) => {
        setSelectedOption(newValue);
        if (id !== null && handleChangeFc) {
            const syntheticEvent = {
                target: {
                    value: newValue?.value || '', // Set the value based on the selected option
                },
            } as ChangeEvent<HTMLSelectElement>;
            handleChangeFc(syntheticEvent, id)
        }

    };


    return (
        <Select
            isSearchable={false}
            components={{ DropdownIndicator }}
            unstyled
            styles={{
                control: (baseStyles) => (
                    {
                        ...baseStyles,
                        minHeight: 0
                    }
                ),
                indicatorsContainer: (baseStyles) => ({
                    ...baseStyles,
                    display: 'flex',
                }),
                menu: (baseStyles) => (
                    {
                        ...baseStyles,
                        zIndex: 9999,
                        background: '#fff',
                        padding: '8px',
                        marginLeft: '-8px',
                        fontSize: '12px',
                        borderRadius: '8px',
                        minWidth: 'max-content',
                        border: '1px solid #cdcdcd'
                    }
                ),
                option: (baseStyles) => ({
                    ...baseStyles,
                    padding: '5px',
                    whiteSpace: 'nowrap',

                    ":hover": {
                        background: '#cdcdcd',
                        borderRadius: '8px'
                    }
                })
            }}
            placeholder={name}
            options={options}
            defaultValue={selectedOption}
            onChange={handleChange}
            className={className}
        />

    )
};

export default OutlineSelect;
