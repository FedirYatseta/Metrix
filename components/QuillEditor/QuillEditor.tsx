import React, { useState, useEffect } from "react";
import 'react-quill/dist/quill.snow.css';
const EmptyComponent = () => false;
import './style.css'
const modules = {
    toolbar: [
        [{ font: [' ', 'times-new-roman', 'arial'] }],
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline"],
        ['link'],
        [{ align: '' }, { align: 'right' }, { align: 'justify' }]

    ]
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    "align",
    "code",
    "code-block"
];

const NextQuill = (props: any) => {
    const [quill, setQuill] = useState(<EmptyComponent />);

    useEffect(() => {
        // console.log(window);
        const ReactQuill =
            typeof window === "object" ? require("react-quill") : <EmptyComponent />;
        setQuill(<ReactQuill {...props} />);
    }, []);

    return quill;
};

export default function IndexPage() {
    // const [value, setValue] = useState("");

    return (
        <div className="flex w-full min-h-[150px]">
            <NextQuill className={' w-full rounded-md h-full bg-black-950 '}

                modules={modules}
                formats={formats}
                onChange={(value: any) => console.log(value)}
            />
        </div>
    );
}
