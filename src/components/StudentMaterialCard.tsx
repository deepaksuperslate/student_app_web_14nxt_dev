import {
    Card,
   
} from "@/components/ui/card"

import Image from 'next/image'
import { Progress } from "./ui/progress"
import { Label } from "./ui/label"

export default function StudentMaterialCard() {
    return (
        <Card className="min-w-[381px] max-h-[102px] justify-">
            <div className="max-w-[285px] max-h-[70px] flex flex-row justify-start"
                style={{
                    top: "16px",
                    left: "16px"

                }}>
                <div className="flex min-h-[40px] min-w-[40px] mx-4 my-7">
                    <Image
                        src="/images/Maths.svg"
                        alt="Science"
                        width={40}
                        height={40}
                    />

                </div>
                <div className="max-w-[229px] max-h-[70px] flex flex-col my-2 mx-2"                      >
                    <div className="max-w-[229px] max-h-[70px] flex flex-col">
                        <h3 className="text-sm">Chemistry</h3>
                        <p className="text-sm">Learning Module</p>
                    </div>
                    <div className="max-w-[229px] max-h-[70px] flex flex-row items-center">
                        <div className="max-w-[229px] max-h-[70px] flex flex-col my-2">
                            <div className="min-w-[229px] max-h-[70px] flex">
                                <Progress value={33} className="w-[100%]" />
                            </div>
                            <div className="max-w-[229px] max-h-[70px] flex justify-start my-2">
                                <Label>60/100</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-[48px] min-h-[70px] flex flex-row items-center my-4">
                    <Image
                        src="/images/Forward.svg"
                        alt="Schedule"
                        width={48}
                        height={48}
                    />
                </div>


            </div>
            {/* <div className="flex flex-row items-center">
                <div className="p-3">
                    <Image
                        src="/images/Maths.svg"
                        alt="Science"
                        width={40}
                        height={40}
                    />

                </div>
                <div className="max-w-[229px] max-h-[70px] flex flex-col"                      >
                    <div className="max-w-[229px] max-h-[70px] flex flex-col">
                        <h1>Chemistry</h1>
                        <h3>Learning Module</h3>
                    </div>
                    <div className="max-w-[229px] max-h-[70px] flex flex-row items-center">
                        <div className="max-w-[229px] max-h-[70px] flex flex-col my-2">
                            <div className="max-w-[229px] max-h-[70px] flex">
                                <Progress value={33} className="w-[100%]" />
                            </div>
                            <div className="max-w-[229px] max-h-[70px] flex justify-end my-2">
                                <Label>60/100</Label>
                            </div>
                        </div>

                    </div>

                </div>
                <div>
                    <Image
                        src="/images/Forward.svg"
                        alt="Schedule"
                        width={48}
                        height={48}
                    />
                </div>
            </div> */}

        </Card>
    )
}
