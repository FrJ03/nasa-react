import { useState } from "react"

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