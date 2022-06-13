import React from 'react'
import Success from "../../lottie/success_add.json"
import Lottie from "react-lottie";
const SuccessAdd = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Success
  };
  return (
    <div className="flex modal-dialog  w-full h-[100%] pointer-events-none m-auto absolute bg-[#fff]/75 left-0 right-0 top-0 flex-col  text-center ">
      <Lottie options={defaultOptions} height={400} width={400} isClickToPauseDisabled />
    </div>
  )
}

export default SuccessAdd