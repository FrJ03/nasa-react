import React from "react"
import { CustomModal } from "./custom-modal"
import { Title } from "../title"
import { CustomButton } from "../custom-button"

interface FilterModalProps {
    isOpen: boolean
    onClose: () => void
}

const FilterModal = (props: FilterModalProps) => {
    return (<CustomModal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="flex flex-col place-items-center h-full">
            <Title type="h3">Filter by</Title>
            <div className="flex flex-col gap-4 my-4 py-4 border-black border-4 h-full w-3/4 place-items-center">
                <span className="flex border-b-2 border-black w-full place-content-center">By Date Range</span>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                    <span>Start Date</span>
                    <input type="date" className="p-2 border-2 border-black" />
                    
                    <span>End Date</span>
                    <input type="date" className="p-2 border-2 border-black" />
                </div>
            </div>
            <CustomButton onClick={() => {}}>Done</CustomButton>
        </div>
    </CustomModal>)
}

export { FilterModal }