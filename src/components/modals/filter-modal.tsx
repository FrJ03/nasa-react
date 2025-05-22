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
    const [nImages, setNImages] = useState<number | undefined>(undefined)

    const close = () => {
        props.onClose({
            option: filterOption,
            value: undefined
        })
    }

    const done = () => {
        if(filterOption === FilterOptions.DATE_RANGE && startDate && endDate){
            props.onClose({
                option: filterOption,
                value: {
                    startDate: startDate,
                    endDate: endDate
                }
            })
        } else if (filterOption === FilterOptions.RANDOM_NUMBER && nImages) {
            props.onClose({
                option: filterOption,
                value: {
                    nImages: nImages
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

    const renderContent = () => {
        if(filterOption === FilterOptions.DATE_RANGE) {
            return (
                <>
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
                </>
            )
        }
        else if (filterOption === FilterOptions.RANDOM_NUMBER) {
            return (
                <>
                    <span>Number of Images</span>
                    <input
                        type='number'
                        className="p-2 border-2 border-black"
                        onChange={event => setNImages(Number.parseInt(event.target.value))}
                        min={1}
                    />
                </>
            )
        } else return null
    }

    return (<CustomModal isOpen={props.isOpen}>
        <div className="flex flex-col place-items-center h-full">
            <Title type="h3">Filter by</Title>
            <div className="flex flex-col gap-4 my-4 pb-4 border-black border-4 w-3/4 place-items-center">
                <div className="flex flex-row border-b-2 border-black w-full place-content-center gap-4">
                    <div 
                        className={`w-full text-center${filterOption === FilterOptions.DATE_RANGE ? " bg-slate-500" : ""}`}
                        onClick={() => setFilterOption(FilterOptions.DATE_RANGE)}
                    >By Date Range</div>
                    <div
                        className={`w-full text-center${filterOption === FilterOptions.RANDOM_NUMBER ? " bg-slate-500" : ""}`}
                        onClick={() => setFilterOption(FilterOptions.RANDOM_NUMBER)}
                    >Number of Images</div>
                </div>
                
                <form className="grid grid-cols-2 place-items-center gap-y-4" onSubmit={done}>
                    {renderContent()}
                </form>
            </div>
            <div className="flex flex-row gap-4">
                <CustomButton onClick={close}>Close</CustomButton>
                <CustomButton onClick={done}>Done</CustomButton>
            </div>
        </div>
    </CustomModal>)
}

export { FilterModal }
