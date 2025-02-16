import {
    Card,
    CardContent,

} from "@/components/ui/card"


import Image from 'next/image'
import { Button } from "./ui/button"
import Link from "next/link"

export function AutoTestCard() {
    return (
        <Card className="w-[268px] h-[348px]">

            <CardContent className="flex flex-col items-center">
                <Image
                    src="/images/Image_v2.svg"
                    alt="Picture of the author"
                    width={268}
                    height={174}
                />
                <h3>Auto Test Generator</h3>

                <p>Quickly create customized tests based on grade and topic.</p>

                <Button>
                    <Link href="/teacher/subjects/quiz">
                        Generate
                    </Link>

                </Button>

            </CardContent>

        </Card>
    )
}