import { useState } from 'react'

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            aria-label="menu"
        >
            <span
                className={`bg-black w-10 h-1 rounded-md transition-transform duration-300 ${isOpen && 'rotate-45 translate-y-3'}`}
            ></span>
            <span
                className={`bg-black w-10 h-1 rounded-md transition-transform duration-300 ${isOpen && 'scale-0'}`}
            ></span>
            <span
                className={`bg-black w-10 h-1 rounded-md transition-transform duration-300 ${isOpen && '-rotate-45 -translate-y-3'}`}
            ></span>
        </div>
    )
}
