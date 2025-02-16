import {
    Card,
    
} from "@/components/ui/card"

import Image from 'next/image'

export function TimeCard30() {
    return (
        <Card className="w-[324px] h-[81px] flex justify-between">

            <div className="min-w-[104px] min-h-[81px] flex flex-row justify-between p-2">
                <Image
                    src="/images/Science.svg"
                    alt="Science"
                    width={104}
                    height={144}
                />
            </div>
            <div className="w-[220px] h-[81px] flex-row">
                <div className="flex flex-row justify-between p-1">
                    <div className="flex flex-row justify-between">
                        <Image
                            src="/images/Schedule.svg"
                            alt="Schedule"
                            width={16}
                            height={16}
                        />
                        <h3>09 : 30 - 10 :15</h3>
                    </div>
                    <div className="mx-2">
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

            </div>

        </Card>

    )
}