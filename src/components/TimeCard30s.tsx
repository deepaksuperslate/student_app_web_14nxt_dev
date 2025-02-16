import {
    Card,
   
} from "@/components/ui/card"

import Image from 'next/image'

export function TimeCard30s() {
    return (
        <Card className="w-[324px] h-[36px] flex justify-between">

            <div className="min-w-[104px] min-h-[36px] flex flex-row justify-between p-2">
                <Image
                    src="/images/Science.svg"
                    alt="Science"
                    width={104}
                    height={144}
                />
            </div>
            <div className="w-[220px] h-[36px] flex-row">
                <div className="flex flex-row justify-between p-1">
                    <div className="flex flex-row items-start">
                        <Image
                            src="/images/Schedule.svg"
                            alt="Schedule"
                            width={16}
                            height={16}
                        />
                        <h3>09 : 30 - 10 :15</h3>
                    </div>
                    <div className="flex flex-col p-1">
                        <p>Physics</p>

                    </div>
                </div>
            </div>

        </Card>

    )
}