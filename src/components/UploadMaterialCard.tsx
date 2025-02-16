import {
    Card,
    CardContent,

} from "@/components/ui/card"


import Image from 'next/image'
import { Button } from "./ui/button"
import Link from "next/link"

export function UploadMaterialCard() {
    return (
        <Card className="w-[268px] h-[348px]">

            <CardContent className="flex flex-col items-center">
                <Image
                    src="/images/Image_v3.svg"
                    alt="Picture of the author"
                    width={268}
                    height={174}
                />
                <h3>Upload Materials</h3>

                <p>Set up your class materials and monitoring tasks effortlessly.</p>

                <Button>
                    <Link href="/teacher/subjects/material">Upload</Link>
                </Button>

            </CardContent>

        </Card>
    )
}