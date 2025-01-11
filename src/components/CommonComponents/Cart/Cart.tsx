import Picture from '@/components/Picture/Picture'
import React from 'react'
import allah_logo from "../../../../public/svg/allah-logo.svg"
import copy from "../../../../public/svg/copy.svg"
import share from "../../../../public/svg/share.svg"
import book from "../../../../public/svg/book.svg"
import light from "../../../../public/svg/light.svg"
import info from "../../../../public/svg/info.svg"
import play from "../../../../public/svg/play.svg"
const Cart = () => {
    return (
        <div className='bg-white p-6 rounded-xl shadow-sm mt-6'>
            <div className='flex items-center gap-3 mt-4'>
                <Picture image={allah_logo} width={30} height={30}></Picture>
                <h2 className='text-second-100 font-medium text-base'>1. The servant is dependent on his Lord #1</h2>
            </div>
            <p className='text-base font-normal text-sixth-100 mt-4'>All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.</p>
            <div>
                <h3 className='text-second-100 font-medium text-base mt-6'>Reference:</h3>
                <p className='text-base font-normal text-sixth-100 mt-1'>Surah Al-Fatir 35:15</p>
            </div>
            <div className='flex gap-6 items-center justify-between mt-4'>
                <Picture image={play} width={30} height={30}></Picture>
                <div className='flex gap-6 items-center'>
                    <Picture image={copy} width={20} height={20}></Picture>
                    <Picture image={book} width={20} height={20}></Picture>
                    <Picture image={light} width={20} height={20}></Picture>
                    <Picture image={share} width={20} height={20}></Picture>
                    <Picture image={info} width={20} height={20}></Picture>
                </div>
            </div>
        </div>
    )
}

export default Cart
