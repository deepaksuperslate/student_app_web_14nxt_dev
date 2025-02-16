import React from 'react'
import {
    Card,
    
} from "@/components/ui/card"


import Image from 'next/image'

export default function TeacherActionCard() {
    return (
        <Card className="w-[472px] h-[128px] flex justify-start">
            <Image
                src="/images/ActionCard.svg"
                alt="Picture of the author"
                width={128}
                height={128}
            />
            <h1>Milestone 1</h1>
            <h2>10:00 MIN</h2>

            <p>20/30</p>
            <p>Students Complete</p>
            <Image
                src="/images/Forward.svg"
                alt="Picture of the author"
                width={24}
                height={24}
            />
        </Card>
    )
}
