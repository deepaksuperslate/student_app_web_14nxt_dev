"use client"
import HeaderAssignment from '@/components/HeaderAssignment'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Image from 'next/image'
import { ChevronsUpDown } from "lucide-react"

import { Textarea } from '@/components/ui/textarea'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export default function page() {
  // const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='flex flex-row'>
      <div className='min-w-[154px] min-h-[1366px]'
        style={{
          position: 'absolute',
          // top: '80px',
          // left: '120px'
        }}>
        <Sidebar />
      </div>
      <div className='max-w-[870px] min-h-[120px]'
        style={{
          position: 'absolute',
          // top: '80px',
          left: '154px'
        }}
      >
        <HeaderAssignment />
      </div>
      <div className='min-w-[870px] min-h-[760px]'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <div className='min-w-[838px] min-h-[1781px] bg-slate-300'>
          <div>
            {/* Class Details */}
            <h1 className='text-3xl p-2'>Weekly Assessment Test</h1>
            <div className='flex flex-row justify-between p-2'>
              <Card className='min-w-[411px] min-h-[112px]'>
                <div className='flex flex-row mx-6 my-4 '>
                  <div >
                    <Image
                      src="/images/Subject Icon.svg"
                      alt="Attachement"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className='flex flex-col mx-4 justify-center '>
                    <div>
                      <h1>Topics</h1>
                    </div>
                    <div>
                      <h1>Friction</h1>
                    </div>
                  </div>
                </div>

              </Card>

              <Card className='min-w-[411px] min-h-[112px]'>
                <div className='flex flex-row mx-6 my-4 '>
                  <div >
                    <Image
                      src="/images/Alarm Icon.svg"
                      alt="Attachement"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className='flex flex-col mx-4 justify-center '>
                    <div>
                      <h1>Timer</h1>
                    </div>
                    <div>
                      <h1>00 : 44 : 15</h1>
                    </div>
                  </div>
                </div>

              </Card>
            </div>
            <div className='flex flex-row mx-4'>
              <Collapsible
                // open={isOpen}
                // onOpenChange={setIsOpen}
                className="w-[650px] space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">
                    Exam Instructions
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Write Exam within time set.
                  </div>
                </CollapsibleContent>
              </Collapsible>

            </div>

            <div className='flex flex-row mx-4'>
              <Collapsible
                // open={isOpen}
                // onOpenChange={setIsOpen}
                className="w-[650px] space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">
                    No of Questions
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    <Image
                      src="/images/TotalNoofQ.svg"
                      alt="Attachement"
                      width={838}
                      height={304}
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>

            </div>


          </div>
          <div>
            
            
          </div>
          <div>
            <h1 className='text-2xl'>Questions</h1>
          </div>
          <div className='flex flex-col '>
            <div className='my-4 flex flex-row'>
              <div>Q1</div>
              <div className='mx-2'>What is the Definition of Friction ?</div>
            </div>
            <div className='justify-center'>
              <Textarea style={{
                width: '850px',
                height: '150px',
              }} />
            </div>
          </div>
          <div>
            <div className='my-4 flex flex-row'>
              <div>Q1</div>
              <div className='mx-2'>What is the Definition of Friction ?</div>
            </div>
            <div className='flex flex-row justify-around mx-4 my-4'>
              <div>
                <p>A. Natural Science</p>
              </div>
              <div>
                <p>B. Natural Science</p>
              </div>
            </div>
            <div className='flex flex-row justify-around mx-4 my-4'>
              <div>
                <p>C. Natural Science</p>
              </div>
              <div>
                <p>D. Natural Science</p>
              </div>
            </div>
          </div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <div className='flex flex-row justify-end'>
            <div>
              <Button variant='outline'>Save Progress</Button>
            </div>
            <div className='mx-4'>
              <Button variant='secondary'>Submit</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
