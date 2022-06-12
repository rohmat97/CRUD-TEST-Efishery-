import React from 'react'
import { BsSortDownAlt, BsSortDown } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
const HeaderList = ({ setsort, sort }) => {
    return (
        <>
            <thead>
                <tr>
                    <th
                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-gray-50">
                        Comodity</th>
                    <th
                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-gray-50">
                        Province</th>
                    <th
                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-gray-50">
                        City</th>
                    <th
                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-gray-50">
                        Total</th>
                    <th
                        className=" flex px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-gray-50 row">
                        Date Added  {!sort ? <BiSort className='mx-2 w-4 h-4' onClick={() => setsort('up')} /> : sort === 'up' ? <BsSortDownAlt className='mx-2 w-4 h-4' onClick={() => setsort('down')} /> : <BsSortDown className='mx-2 w-4 h-4' onClick={() => setsort()} />}</th>

                    <th
                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-gray-50">
                        Edit</th>
                    <th
                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-gray-50">
                        Delete</th>
                </tr>
            </thead>
        </>
    )
}

export default HeaderList