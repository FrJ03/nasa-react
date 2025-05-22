import React from "react"
import { SearchIcon } from "./icons/search-icon"

interface SearchBarProps {
    default?: string
    onChange: (value: string) => void
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <div className="flex flex-row w-3/5 border-black border-4">
            <input
                className="w-full px-2"
                type="text"
                placeholder="image title"
                defaultValue={props.default}
                onChange={(event) => props.onChange(event.target.value)}
            />
            <SearchIcon/>
        </div>
    )
}

export { SearchBar }