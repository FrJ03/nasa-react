import React from "react";

interface TitleProps {
    children: string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title = (props: TitleProps) => {
    const styles = "px-8 py-4 font-bold border-black border-8 w-fit text-xl"

    switch(props.type){
        case "h2":
            return (<h2 className={styles}>{props.children}</h2>)
        case "h3":
            return (<h3 className={styles}>{props.children}</h3>)
        case "h4":
            return (<h4 className={styles}>{props.children}</h4>)
        case "h5":
            return (<h5 className={styles}>{props.children}</h5>)
        case "h6":
            return (<h6 className={styles}>{props.children}</h6>)
        default:
            return (<h1 className={styles}>{props.children}</h1>)
    }
}

export {Title}