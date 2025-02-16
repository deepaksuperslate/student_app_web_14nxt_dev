import React from 'react'
import {
    Card,

} from "@/components/ui/card"


import Image from 'next/image'

export default function MileStoneCard() {
    return (
        <Card className="w-[175px] h-[220px]">
            <div className='flex flex-col justify-center my-4'>
                <div className='flex justify-center my-2'>
                    <Image
                        src="/images/Mile Stone.svg"
                        alt="Picture of the author"
                        width={48}
                        height={48}
                    />
                </div>
                <div className='flex justify-center my-2'>
                <h1 className='text-slate-500'>Milestone 1</h1>
                </div>

                <div className='flex justify-center my-2'>
                <h2 className='text-xl'>10:00 MIN</h2>
                </div>

                <div className='flex justify-center'>
                <p className='text-slate-500'>20/30</p>
                </div>

                <div className='flex justify-center'>
                <p className='text-sm'>Students Complete</p>
                </div>
            </div>

        </Card>
    )
}
