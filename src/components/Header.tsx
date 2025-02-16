import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function Header() {
  return (
    <div className='min-w-[1023px] min-h-[80px] flex justify-between p-4'>
      <div className='min-w-[960px] min-h-[48px]  flex flex-row justify-around'>
        <div className='min-w-[263px] min-h-[48px] flex justify-center'>
          <Image
            src="/images/Logo_F_black.svg"
            alt="Picture of the author"
            width={48}
            height={48}
          />
          <div className='justify-evenly p-1'>
          <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight mx-2">
            Super Slate
          </h1>
          </div>
          
        </div>
        <div className='min-w-[697px] min-h-[48px] flex justify-end items-center'>
          <Button className='min-w-[128px] min-h-[48px]'>Get Started</Button>
        </div>
      </div>

    </div>
  )
}
