import React from 'react'

export const Avatar = ({ src, on }) => {
    return (
        <div className="relative">
            <img className="object-cover w-20 h-20 rounded-full ring ring-gray-300 dark:ring-gray-600" src={src} alt="imagen de avatar" />
            {
                on ?
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                    : ""

            }
        </div>
    )
}
