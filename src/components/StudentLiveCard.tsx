import React from 'react'
import {
    Card,
    

} from "@/components/ui/card"


import Image from 'next/image'

export default function StudentLiveCard() {
    return (
        <Card className="w-[170px] h-[250px]">

            <div className="flex flex-col">
                <div className='flex justify-center'>
                    <h1 className='text-xl'>Akshay Sharma</h1>
                </div>
                <div className='flex justify-center'>
                    <h3 className='text-sm text-slate-500'>Status: Active</h3>
                </div>



                <div className="flex items-center justify-center h-full">
                    <div className="relative w-[150px] h-[150px]">
                        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#D3D3D3" strokeWidth="3" />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="url(#progress-gradient)"
                                strokeWidth="8"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 * (1 - 0.75)}
                            />
                            <defs>
                                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#D3D3D3" />
                                    <stop offset="100%" stopColor="#D3D3D3" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-900 dark:text-gray-50">
                            75%
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mx-8 justify-between'>
                    <Image
                        src="/images/eye.svg"
                        alt="Eye"
                        width={48}
                        height={48}
                    />
                    <Image
                        src="/images/Selection Icon.svg"
                        alt="Selection Icon"
                        width={48}
                        height={48}
                    />
                </div>



            </div>

        </Card>
    )
}
