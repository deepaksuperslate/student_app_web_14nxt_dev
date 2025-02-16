import {
    Card,
   
} from "@/components/ui/card"

import Image from 'next/image'

export default function TaskCard() {
    return (
        <Card className="w-[270px] h-[72px] flex justify-between">

            <div className="flex flex-start items-center">
                <div className="p-3">
                    <Image
                        src="/images/Folcer 3D.svg"
                        alt="Science"
                        width={40}
                        height={40}
                    />

                </div>
                <div>
                    <div>
                        <h1>Chemistry</h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image
                            src="/images/Schedule.svg"
                            alt="Schedule"
                            width={16}
                            height={16}
                        />
                        <h3 className="mx-1">24 April, 12:30pm</h3>

                    </div>


                </div>
            </div>




        </Card>
    )
}
