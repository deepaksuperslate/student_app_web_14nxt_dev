import {
    Card,
   
} from "@/components/ui/card"

import Image from 'next/image'

export function TimeCard60() {
    return (
        <Card className="w-[324px] h-[144px] flex justify-between">

                <div className="min-w-[104px] min-h-[144px] flex flex-row justify-between p-2">
                    <Image
                        src="/images/Science.svg"
                        alt="Science"
                        width={104}
                        height={144}
                    />
                </div>
                <div className="w-[220px] h-[144px] flex-row">
                    <div className="flex flex-row justify-between p-2">
                        <div className="flex flex-row justify-between">
                            <Image
                                src="/images/Schedule.svg"
                                alt="Schedule"
                                width={16}
                                height={16}
                            />
                            <h3>09 : 30 - 10 :15</h3>
                        </div>
                        <div className="mx-4">
                            <Image
                                src="/images/Status.svg"
                                alt="Status"
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col p-1">
                            <p>Physics</p>
                            <p>Algebra - Linear Equations</p>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="flex flex-row">
                        <Image
                            src="/images/Attachement.svg"
                            alt="Picture of the author"
                            width={16}
                            height={16}
                        />
                        <p> Assignment Due</p>

                    </div>
                    <div className="flex flex-row">
                        <Image
                            src="/images/Attachement.svg"
                            alt="Picture of the author"
                            width={16}
                            height={16}
                        />
                        <p> Assignment Due</p>

                    </div>
                    
                </div>
        </Card>

    )
}