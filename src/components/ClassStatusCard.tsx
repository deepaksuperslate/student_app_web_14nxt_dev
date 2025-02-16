import React from 'react'
import {
    Card,
    CardContent,
    
} from "@/components/ui/card"


import Image from 'next/image'

export default function ClassStatusCard() {
    return (
        <Card className="w-[270px] h-[80px]">

            <CardContent className="flex flex-row">
                <Image
                    src="/images/Class Status Card Icon.svg"
                    alt="Picture of the author"
                    width={48}
                    height={48}
                />
                <h3>Ongoing Class</h3>
                <h1>Math - Grade 8</h1>             

            </CardContent>

        </Card>
    )
}
