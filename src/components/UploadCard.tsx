import React from 'react'
import {
    Card,
    CardContent,
    
} from "@/components/ui/card"

import Image from 'next/image'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function UploadCard() {
  return (
    <Card className="w-[264px] h-[319px]">
            
            <CardContent className="flex flex-col">
                <Image
                        src="/images/UploadCardIcon.svg"
                        alt="Picture of the author"
                        width={64}
                        height={64}
                      />
                      <h3>Assignment</h3>
                      <h1>Physics</h1>
                      <Separator className="my-4"/>
                      <p>Please add your content here.</p>
                      
                      
                      <Button>ADD</Button>

            </CardContent>

            
        </Card>
  )
}
