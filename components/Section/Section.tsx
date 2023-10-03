import React from "react"

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="xs:p-2 lg:p-5 flex flex-col flex-auto  overflow-y-auto h-full">
            {children}
        </section>
    )
};

export default Section;
