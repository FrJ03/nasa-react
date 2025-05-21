import { useState } from "react"
import { DateRangeVM } from "../model/view-model/date-range"

export const useFilter = (init: boolean = false) => {
    const [isOpen, setIsOpen] = useState<boolean>(init)
    const [filterOption, setFilterOption] = useState<'date-range'>('date-range')
    
    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return {
        isOpen,
        openModal,
        closeModal,
        filterOption,
        setFilterOption,
    }
}