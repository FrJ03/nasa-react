import React from "react"

interface CustomModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const CustomModal = (props: CustomModalProps) => {
    if (!props.isOpen) return null

    return (
        <div onClick={props.onClose} className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center place-items-center">
            <div className="bg-white h-4/5 w-4/5 p-4">
                {props.children}
            </div>
        </div>
    )
}

export { CustomModal }