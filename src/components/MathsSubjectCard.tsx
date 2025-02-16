import {
    Card,
   
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import Image from 'next/image'
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import Link from "next/link"

export function MathsSubjectCard() {
    return (
        <Card className="w-[380px] h-[263px] ">
            <div>
                <div className="mx-4 my-2">
                    <Image
                        src="/images/Maths.svg"
                        alt="Picture of the author"
                        width={56}
                        height={56}
                    />
                </div>
                <div className="mx-4 my-5">
                    <h1>Mathematics</h1>
                    <p>Algebra - Linear Equations</p>
                    <div className="flex flex-col my-2">
                        <div className="flex">
                            <Progress value={33} className="w-[100%]" />
                        </div>
                        <div className="flex justify-end my-2">
                            <Label>60/100</Label>
                        </div>
                    </div>
                </div>
                <div className="mx-4 my-6">
                    <Button variant="outline">
                        <Link href="/student/subjects/maths">Explore</Link>
                        <Image
                            src="/images/exploreIcon.svg"
                            alt="Picture of the author"
                            width={24}
                            height={24}
                        />
                    </Button>
                </div>

            </div>
        </Card>

    )
}