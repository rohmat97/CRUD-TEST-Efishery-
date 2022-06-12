import React from 'react'
import LoadingSkater from "../../lottie/loading-skater.json"
import Lottie from "react-lottie";

const LoadingState = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingSkater
    };
  return (
    <div className="flex modal-dialog  w-full h-[100%] pointer-events-none m-auto absolute bg-[#fff]/75 left-0 right-0 flex-col justify-center text-center ">
        <Lottie options={defaultOptions} height={400} width={400} isClickToPauseDisabled />
        <p className='text-red-500 text-4xl '>Wait for a min . . . </p>
    </div>
  )
}

export default LoadingState