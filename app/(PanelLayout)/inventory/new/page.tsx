'use client'
import FormInventory from "@/components/FormInventory/FormInventory";
import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import Input from "@/components/Input/Input";
import Section from "@/components/Section/Section";
import { Plus } from "@/image/image";
import React from "react"

const New = () => {
    return (
        <Section>
            <HeaderGeneral name={'Save as Draft'} title="New Inventory Item" icon={<Plus />} />

            <FormInventory />


        </Section>
    )
};

export default New;
