import {
    Card,
    
} from "@/components/ui/card"


import Image from 'next/image'
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"

export function TextBookCard() {
    return (
        <Card className="w-[342px] h-[537px]">

            <div className="flex justify-center">
                <Image
                    src="/images/Science.svg"
                    alt="Picture of the author"
                    width={228}
                    height={236}
                />
            </div>
            <div className="flex flex-col justify-center mx-3">
                {/* <h3>Version 1.1</h3> */}
                <h1 className="text-xl">Class Notes</h1>
                <h3 className="text-base text-slate-500">Stay updated with lesson notes</h3>
                <p className="text-sm my-4">All notes are organized by topic and date for your convenience</p>
                <Separator />
                <h3 className="my-2">Title</h3>
                <div className="flex flex-row justify-start ">
                    <Badge variant="outline" className="mx-1">Tag 1</Badge>
                    <Badge variant="outline" className="mx-1">Tag 2</Badge>
                    <Badge variant="outline" className="mx-1">Tag 3</Badge>
                    <Badge variant="outline" className="mx-1">Tag 4</Badge>
                </div>
            </div>
            <div className="max-h-48 flex flex-row my-4 mx-4 justify-around">
                <Button variant="outline" style={{
                    width:"139px",
                    height:"48px",
                }}
                >View
                </Button>
                <Button style={{
                    width:"139px",
                    height:"48px",
                }}
                >Download
                </Button>
            </div>
        </Card>

    )
}