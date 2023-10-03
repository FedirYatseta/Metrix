import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import Section from "@/components/Section/Section";
import { Plus } from "@/image/image";
import React from "react"

const New = () => {
    return (
        <Section>
            <HeaderGeneral name={'Save as Draft'} title="New Inventory Item" icon={<Plus />} />
        </Section>
    )
};

export default New;
