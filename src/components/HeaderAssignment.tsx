import Image from 'next/image'
import React from 'react'


export default function HeaderNotes() {
  return (
    <div className='min-w-[870px] min-h-[80px] flex justify-between p-4 '>

      <Image
        src="/images/Backward.svg"
        alt="Picture of the author"
        width={24}
        height={24}
      />
      <div className='my-4'>
        <h1 className="scroll-m-20 text2xl font-semibold tracking-tight">
          Assignment Mathematics: Linear Algebra
        </h1>
      </div>

      <Image
        src="/images/Notification.svg"
        alt="Picture of the author"
        width={24}
        height={24}
      />


    </div>

  )
}
