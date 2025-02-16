import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Search } from "lucide-react"
import { Label } from './ui/label'
import { SidebarInput } from './ui/sidebar'

import { Input } from "@/components/ui/input"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function HeaderFileView() {
    return (
        <div className='min-w-[1023px] border-b border-black min-h-[80px] flex p-4'>
            <Image
                src="/images/Backward.svg"
                alt="Picture of the author"
                width={48}
                height={48}
            />
            <Image
                src="/images/List.svg"
                alt="Picture of the author"
                width={48}
                height={48}
            />
            <Label htmlFor="search" className="sr-only">
                Search
            </Label>
            <SidebarInput
                id="search"
                placeholder="Search the docs..."
                className="pl-8"
            />

            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Open</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when youre done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>

    )
}
