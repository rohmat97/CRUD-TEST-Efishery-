import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import Warning from '../../gif/warning.gif'
const Modals = (props) => {
    const { params, setDeleteActive, deleteAPIData, setparamsDelete, DeleteActive } = props
    return (
        <div className="modal-dialog min-w-400 max-w-[600px] pointer-events-none m-auto absolute top-[30%] left-0 right-0 ">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#867462]  bg-clip-padding rounded-md outline-none text-current">
                <div
                    className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-medium leading-normal text-white" id="exampleModalLabel">Are you sure want to delete {params?.komoditas} where the place is {params?.area_kota} -  {params?.area_provinsi} ?</h5>
                    <AiFillCloseCircle className='text-red-600 w-8 h-8'
                        onClick={async () => {
                            setparamsDelete()
                            setDeleteActive(false)
                        }} />
                </div>
                <img src={Warning} alt="Warning" className='w-64 h-64 bg-transparent m-auto' />
                <div className="flex m-auto p-4 w-auto justify-around flex-row">
                    <button
                        onClick={() => setDeleteActive(false)}
                        className="bg-transparent hover:bg-blue-500 text-[#D3D3D3] font-semibold hover:text-white py-2 px-4 mx-4 border border-[#D3D3D3] hover:border-transparent rounded">
                        Cancel
                    </button>
                    <div
                        onClick={async () => {
                            await deleteAPIData(params)
                            setDeleteActive(false)
                            setparamsDelete()
                        }}
                        className=" flex flex-row  mx-4 justify-items-center justify-center border-red-600 hover:border-transparent rounded bg-transparent hover:bg-red-600 text-red-600 hover:text-white border py-2 px-4 ">
                        <BsFillTrashFill className='w-4 h-4 m-auto' />
                        <button className="font-semibold ml-2">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modals