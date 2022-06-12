import React from 'react'
import DeleteSuccessGif from '../../gif/success-delete.gif'

const DeleteSuccess = () => {
  return (
    <div className="flex modal-dialog  w-full h-[100%] pointer-events-none m-auto absolute bg-[#fff]/75 left-0 right-0 flex-col justify-center text-center ">
        <img src={DeleteSuccessGif} alt="" className='w-64 h-64 bg-transparent m-auto' />
    </div>
  )
}

export default DeleteSuccess