import {
    Card,
    CardContent,

} from "@/components/ui/card"


import Image from 'next/image'
import { Button } from "./ui/button"
import Link from "next/link"

export function PrepNewClassCard() {
    return (
        <Card className="w-[268px] h-[348px]">

            <CardContent className="flex flex-col items-center">
                <Image
                    src="/images/Image_v1.svg"
                    alt="Picture of the author"
                    width={268}
                    height={174}
                />
                <h3>Pre New Class</h3>

                <p>Set up your class materials and monitoring tasks efforlessly.</p>

                <Button>
                    <Link href="/teacher/subjects/prep">
                        Prep
                    </Link>

                </Button>

            </CardContent>

        </Card>
    )
}