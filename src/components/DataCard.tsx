import React from 'react'
import {
    Card,
    
} from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"




export default function DataCard() {
    return (
        <Card className="w-[195px] h-[80px] flex flex-row items-center justify-evenly">
            <Avatar>
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>25</AvatarFallback>
            </Avatar>
            <p>Active</p>
        </Card>
    )
}
