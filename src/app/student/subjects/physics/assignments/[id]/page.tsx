import Image from 'next/image'

import HeaderAssignment from '@/components/HeaderAssignment'

import Sidebar from '@/components/Sidebar'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'

export default function page() {
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
            <h1 className='text-2xl p-2'>Class Details</h1>
            <div className='flex flex-row justify-between p-2'>
              <p>Subject    : Mathematics</p>
              <p>Due on     : Feb 1st,2024</p>
            </div>
            <div className='flex flex-row justify-between p-2'>
              <p>Teacher    : Ankit Sharma</p>
              <p>Level      : III</p>
            </div>
          </div>
          <div>
            <h1 className='text-2xl p-2'>Overview</h1>
            <div className='flex flex-row justify-between p-2'>
              <p>Description    : Solve problems on quadratic equations</p>

            </div>
            <div className='flex flex-row justify-between p-2'>
              <p>Questions  : 24</p>
              <p>Extimated Time      : 45 Mins</p>
            </div>
          </div>
          <div>
            <h1 className='text-2xl p-2'>Attachments</h1>
            <div className='flex flex-col justify-between p-2'>
              <div className='flex flex-row justify-between'>
                <Image
                  src="/images/Attachement.svg"
                  alt="Attachement"
                  width={24}
                  height={24}
                />
                <p>Formula Sheet: Quadratic Formula.pdf</p>
                <Image
                  src="/images/Download.svg"
                  alt="Download"
                  width={24}
                  height={24}
                />
              </div>
              <div className='flex flex-row justify-between'>
                <Image
                  src="/images/Attachement.svg"
                  alt="Attachement"
                  width={24}
                  height={24}
                />
                <p>Formula Sheet: Quadratic Formula.pdf</p>
                <Image
                  src="/images/Download.svg"
                  alt="Download"
                  width={24}
                  height={24}
                />
              </div>

            </div>
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
