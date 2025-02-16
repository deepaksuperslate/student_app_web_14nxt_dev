import {
    Card,
   
} from "@/components/ui/card"


import Image from 'next/image'
import { Button } from "./ui/button"

export function QuizCard() {
    return (
        <Card className="w-[196px] h-[223px] ">

            <div className="flex flex-col p-4">
                <div className="flex flex-start my-2">
                    <Image
                        src="/images/Quizzes.svg"
                        alt="Picture of the author"
                        width={48}
                        height={48}
                    />
                </div>
                <div className="my-2">
                    <h1 className="text-xl">Quiz 1</h1>
                    <h3>12:00 PM</h3>
                </div>
                <div className="my-2 flex">
                    <Button style={{
                        width:"161px"
                    }}>View</Button>
                </div>
            </div>
        </Card>

    )
}