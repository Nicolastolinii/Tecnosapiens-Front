import React from 'react'

export const Avatar = ({ src, on, wh,ring }) => {
    return (
        <div className="relative">
            {
                src?
                <img className={`object-cover text-transparent bg-slate-300 drop-shadow-lg ${wh? wh : "w-20 h-20"} rounded-full ${ring ? "ring" : ""} ring-gray-300 dark:ring-gray-600`} src={src} alt="imagen de avatar" />
                :
                <div className={`object-cover text-transparent bg-slate-300  drop-shadow-lg ${wh? wh : "w-20 h-20"} rounded-full ${ring ? "ring" : ""} ring-gray-300 dark:ring-gray-600`}></div>
            }
            
            {
                on ?
                    <span className="absolute bottom-0 right-1 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                    : ""

            }
        </div>
    )
}
