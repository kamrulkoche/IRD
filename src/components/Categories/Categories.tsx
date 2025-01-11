import React from 'react'
import Search from '../CommonComponents/Search'
import Accordion from '../CommonComponents/Accordion/Accordion'

const Categories = () => {
    return (
        <div>
             <h2 className='font-medium text-2xl text-sixth-100 mb-6'>Dua Page</h2>
            <h2 className='font-medium text-base text-white bg-second-100 py-4 px-12 border rounded-t-xl mb-3 text-center'>Categories</h2>
            <Search/>
            <div className='mt-4'>
                <Accordion/>
            </div>
        </div>
    )
}

export default Categories
