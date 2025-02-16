import {
    Card,
    
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import Image from 'next/image'
import { Button } from "./ui/button"
import { Label } from "./ui/label"

export function LiveCard() {
    return (
        <Card className="max-w-[472px] max-h-[236px] p-0">


            <div className="flex flex-row justify-start">
                <div className='max-w-[228px] min-h-[236px]p-0'>
                    <Image
                        src="/images/Science.svg"
                        alt="Picture of the author"
                        width={228}
                        height={236}
                    />
                </div>
                <div className='max-w-[244px] min-h-[230px]'>
                    <div className="max-w-[212px] min-h-[116px] justify-start py-6">
                        <div>
                            <h3>Version 1.1</h3>
                            <h1>Physics</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <Progress value={33} className="w-[60%]" />
                            <Label>60/100</Label>
                        </div>
                    </div>
                    <p>Please add your content here. Keept it short and simple</p>
                    <Button style={{
                        backgroundColor: "green",
                        width: "212px",
                        height: "48px",
                        marginTop: 2
                    }}>
                        Join Now</Button>


                </div>

            </div>






        </Card>
    )
}