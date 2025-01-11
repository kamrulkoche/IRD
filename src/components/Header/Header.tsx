import React from 'react'
import search from "../../../public/svg/search.svg"
import Picture from '../Picture/Picture'

const Header = () => {
    return (
        <div className='flex justify-end items-center'>
            <div className='flex w-72 bg-white p-1'>
                <input type="text" className='text-base font-normal text-first-200 w-80 pl-4 ' placeholder='Search by Dua Name' />
                <div className='bg-first-400 p-3 cursor-pointer'>
                    <Picture image={search} width={24} height={24}></Picture>
                </div>
            </div>
        </div>
    )
}

export default Header
