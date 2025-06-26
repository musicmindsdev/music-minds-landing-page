import Logo from '@/components/svg/Logo'
import React from 'react'

function Loading() {
  return (
    <div className="relative w-17 p-4 h-17 mx-auto my-5 ">
    <div className="absolute inset-0 border-4 border-transparent border-t-[#5243FE] rounded-full animate-spin"></div>
    <div className="absolute inset-0 flex items-center m-3 justify-center">
      <Logo />
    </div>
  </div>
  )
}

export default Loading