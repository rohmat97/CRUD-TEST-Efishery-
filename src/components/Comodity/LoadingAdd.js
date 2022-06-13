import React from 'react'
import Loading from "../../lottie/wait_add.json"
import Lottie from "react-lottie";

const LoadingAdd = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading
  };
  return (
    <div className="flex modal-dialog  w-full h-[100%] pointer-events-none m-auto absolute bg-[#fff]/75 left-0 right-0 top-0 flex-col  text-center ">
      <Lottie options={defaultOptions} height={400} width={400} isClickToPauseDisabled />
      <p className='text-red-500 text-4xl '>Wait for a min . . . </p>
    </div>
  )
}

export default LoadingAdd