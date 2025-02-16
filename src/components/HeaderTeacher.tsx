import Image from 'next/image'
import React from 'react'


export default function HeaderTeacher() {
    return (

        <div className='min-w-[870px] min-h-[120px] flex flex-row items-center justify-between'>
            <div className='min-w-[870px] min-h-[48px]  flex flex-row justify-around'>
                <div className='min-w-[263px] min-h-[48px] flex justify-start mx-1'>
                    <Image
                        src="/images/Backward.svg"
                        alt="Back Button"
                        width={24}
                        height={24}
                    />
                    <div className='justify-evenly p-1'>
                        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight mx-4 my-2">
                            Hello Bhaskar!
                        </h1>
                    </div>

                </div>
                <div className='min-w-[607px] min-h-[48px] flex justify-end items-center'>
                    <Image
                        src="/images/Notification.svg"
                        alt="Notification"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    )
}
