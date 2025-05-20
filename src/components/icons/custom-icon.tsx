import React from "react";

interface CustomIconProps {
    source: string
    alt?: string
}

const CustomIcon = (props: CustomIconProps) => {
    return (
        <figure className="object-cover w-fit">
            <img className="h-full w-fit" alt={props.alt} src={props.source}/>
        </figure>
    )
}

export { CustomIcon }