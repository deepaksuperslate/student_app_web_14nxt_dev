"use client"
import React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar } from './ui/calendar'
import { CalendarIcon } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export default function ClassDetailsCard() {
    const [date, setDate] = React.useState<Date>()
    
    return (
        <div className="w-[838px] h-[394px] bg-slate-400">Class Details
            <div className='w-[838px] flex-row justify-center'>
                <div >Grade:
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="I" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="I">I</SelectItem>
                            <SelectItem value="II">II</SelectItem>
                            <SelectItem value="III">III</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>Section:
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="A" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="A">A</SelectItem>
                            <SelectItem value="B">B</SelectItem>
                            <SelectItem value="C">C</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='w-[838px] flex-row justify-start'>
                <div>Subject: <Input /></div>
                <div>Topic: <Input /></div>
            </div>
            <div className='w-[838px] flex-row justify-start'>
                <div>Date:
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>Time: <Input /></div>
            </div>
        </div>
    )
}
