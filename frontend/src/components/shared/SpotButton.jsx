import React from 'react'

function SpotButton({ children, onClick }) {
    return (
        <div
            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-2 sm:pr-0"
            onClick={onClick}
        >
            <button
                type="button"
                className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Home</span>
                {children}
            </button>
        </div>
    )
}

export default SpotButton
