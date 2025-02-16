import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function HeaderNotes() {
  return (
    <div className='min-w-[870px] min-h-[80px] flex justify-between p-4'>
      <Image
        src="/images/Backward.svg"
        alt="Picture of the author"
        width={24}
        height={24}
      />

      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Mathematics: Linear Algebra
      </h1>
      <p>Live Status:</p>
      <Button>Active</Button>
      <Image
        src="/images/Message.svg"
        alt="Message"
        width={24}
        height={24}
      />
      <Image
        src="/images/TestHeader.svg"
        alt="TestHeader"
        width={24}
        height={24}
      />
      <Image
        src="/images/Download.svg"
        alt="Download"
        width={24}
        height={24}
      />

    </div>
  )
}
