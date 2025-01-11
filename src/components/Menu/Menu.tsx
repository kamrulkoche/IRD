import React from 'react'
import Picture from '../Picture/Picture'
import logo from "../../../public/svg/logo.svg"
import logo_2 from "../../../public/svg/logo-2.svg"
import home from "../../../public/svg/home.svg"
import font from "../../../public/svg/font.svg"
import light from "../../../public/svg/light.svg"
import book from "../../../public/svg/book.svg"
import chat from "../../../public/svg/chat.svg"
import book_2 from "../../../public/svg/book-2.svg"

const Menu = () => {
    return (
        <div className=' bg-white items-center gird '>
            <Picture image={logo} width={100} height={100} ></Picture>
            <div className='grid items-center justify-center gap-5 my-16'>
                <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer'>
                    <Picture image={home} width={20} height={20}></Picture>
                </div>
                <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer'>
                    <Picture image={font} width={20} height={20}></Picture>
                </div>
                <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer'>
                    <Picture image={light} width={20} height={20}></Picture>
                </div>
                <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer'>
                    <Picture image={book} width={20} height={20}></Picture>
                </div>
                <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer'>
                    <Picture image={chat} width={20} height={20}></Picture>
                </div>
                <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer'>
                    <Picture image={book_2} width={20} height={20}></Picture>
                </div>
            </div>
            <Picture image={logo_2} width={100} height={100} ></Picture>
        </div>
    )
}

export default Menu
