import React, { useState } from "react"
import { CustomModal } from "./custom-modal"
import { Title } from "../title"
import { CustomButton } from "../custom-button"
import { Filter } from "../../model/filter"
import { FilterOptions } from "../../model/filter-options"

interface FilterModalProps {
    isOpen: boolean
    onClose: (filter: Filter) => void
}

const FilterModal = (props: FilterModalProps) => {
    const [filterOption, setFilterOption] = useState<FilterOptions>(FilterOptions.DATE_RANGE)
    const [startDate, setStartDate] = useState<Date | undefined>(undefined)
    const [endDate, setEndDate] = useState<Date | undefined>(undefined)

    const close = () => {
        if(startDate && endDate){
            props.onClose({
                option: filterOption,
                value: {
                    startDate: startDate,
                    endDate: endDate
                }
            })
        } else {
            props.onClose({
                option: filterOption,
                value: undefined
            })
        }
    }

    const toYYYYMMDD = (date: Date): string => {
        return date.toISOString().substring(0, date.toISOString().indexOf('T'))
    }

    return (<CustomModal isOpen={props.isOpen}>
        <div className="flex flex-col place-items-center h-full">
            <Title type="h3">Filter by</Title>
            <div className="flex flex-col gap-4 my-4 py-4 border-black border-4 h-full w-3/4 place-items-center">
                <span className="flex border-b-2 border-black w-full place-content-center">By Date Range</span>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                    <span>Start Date</span>
                    <input
                        type="date"
                        className="p-2 border-2 border-black" 
                        onChange={(event) => setStartDate(new Date(event.target.value))}
                        max={endDate ? toYYYYMMDD(endDate) : undefined}
                    />
                    
                    <span>End Date</span>
                    <input
                        type="date"
                        className="p-2 border-2 border-black" 
                        onChange={(event) => setEndDate(new Date(event.target.value))}
                        min={startDate ? toYYYYMMDD(startDate) : undefined}
                        max={toYYYYMMDD(new Date())}
                    />
                </div>
            </div>
            <CustomButton onClick={close}>Done</CustomButton>
        </div>
    </CustomModal>)
}

export { FilterModal }
