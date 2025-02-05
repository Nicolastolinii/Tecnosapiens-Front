import React from 'react'
import { NavBar } from '../components/main/navbar/NavBar'
import { FilterC } from '../components/filter/FilterC'

export const Filter = () => {
  return (
    <div className='flex flex-col pt-32 bg-[#F9F9FE] min-h-screen'>
    <NavBar input={false}/>
    <FilterC/>
    </div>
  )
}
