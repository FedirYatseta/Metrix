"use client";
import Input from "@/components/Input/Input";
import CSelect from "@/components/Select/select";
import { Location, Message, Profile } from "@/image/image";

import React from "react";

import { state } from './state'
import { COUNTRIES } from "@/components/Select/config";

import Image from "next/image";


const FormAccount = ({ errors, touched, setFieldValue, values }: any) => {

  const handleCountryChange = (selectedOption: any, name: string) => {
    if (!selectedOption) return;
    setFieldValue(name, selectedOption.value);
  };
  const options = Object.keys(COUNTRIES).map((countryCode) => {
    const country = COUNTRIES[countryCode];


    return {
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={country.image}
            alt={`${country.name} flag`}
            width={24}
            height={24}
            style={{ marginRight: "8px" }}
          />
          {` (${country.phone[0]})`}
        </div>
      ),
      value: country.phone[0],
    };
  });
  const item = state.map((item) => { return { value: item.country, label: item.country } })
  const stateItem = state.filter(country => country.country === values.country).map((item) => {
    const val = item.states.map((state) => { return { value: state, label: state } })
    return [...val]
  })

  return (
    <div className="grid grid-col gap-4 ">
      <Input
        id={"firstname"}
        name={"firstname"}
        label={"First Name"}
        errors={errors}
        touched={touched}
        placeholder={"First Name"}
        icon={<Profile color={""} opacity={0} />}
      />
      <Input
        id={"lastname"}
        name={"lastname"}
        label={"Last Name"}
        errors={errors}
        touched={touched}
        placeholder={"Last Name"}
        icon={<Profile color={""} opacity={0} />}
      />
      <Input
        id={"email"}
        name={"email"}
        label={"Email"}
        errors={errors}
        touched={touched}
        placeholder={"Email"}
        icon={<Message color={""} opacity={0} />}
      />

      <div className="grid grid-cols-3 gap-4 items-end">
        <div className="col-span-1">
          <CSelect
            id={"code"}
            name={"code"}
            label="Phone Number"
            onChange={(e) => handleCountryChange(e, "code")}
            errors={errors}
            touched={touched}
            options={options}
            defaultValue={options[0]}
          />
        </div>
        <div className="col-span-2">
          <Input
            id={"phone"}
            name={"phone"}
            type={"tel"}
            errors={errors}
            touched={touched}
          />
        </div>
      </div>
      <Input
        id={"address"}
        name={"address"}
        label={"Address"}
        errors={errors}
        touched={touched}
        placeholder={"Address"}
        icon={<Location />}
      />
      <Input
        id={"city"}
        name={"city"}
        label={"City"}
        errors={errors}
        touched={touched}
        placeholder={"City"}
      />
      <div className="grid grid-cols-2 gap-4 items-center">
        <CSelect
          id={"country"}
          name={"country"}
          errors={errors}
          touched={touched}
          options={item}
          label="Country"
          onChange={(e) => {
            setFieldValue("country", e.value)
          }}
          defaultValue={item[0]}
        />
        <CSelect
          id={"state"}
          name={"state"}
          label="State"
          errors={errors}
          touched={touched}
          options={stateItem[0]}
          onChange={(e) => setFieldValue("state", e.value)}
          defaultValue={stateItem[0]}
        />
      </div>
    </div>

  );
};

export default FormAccount;
