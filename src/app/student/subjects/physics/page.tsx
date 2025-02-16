
import AssignmentsTable from '@/components/AssignmentsTable'
import { ClassNotesCard } from '@/components/ClassNotesCard'
import HeaderGen from '@/components/HeaderGen'
import { QuizCard } from '@/components/QuizCard'
import Sidebar from '@/components/Sidebar'
import StudentMaterialCard from '@/components/StudentMaterialCard'
import { TextBookCard } from '@/components/TextBookCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

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
        <HeaderGen />
      </div>
      <div className='min-w-[870px] min-h-[1260px]'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <div className='flex flex-row justify-around'>
          <div>
            <h1 className='text-xl'>Class Notes</h1>
            <ClassNotesCard />
          </div>
          <div>
            <h2 className='text-xl'>Text Book</h2>
            <TextBookCard />
          </div>
        </div>
        <div className='mx-4 my-4'>
          <div>
            <h1 className='mx-8 text-xl'>Study Material</h1>
          </div>
          <div className='mx-4 my-2 flex flex-row justify-around'>
            <div>
              <div className='max-w-[381px] min-h-[102px] flex'>
                <StudentMaterialCard />
              </div>
              <div className='max-w-[381px] min-h-[102px] flex'>
                <StudentMaterialCard />
              </div>
              <div className='max-w-[381px] min-h-[102px] flex'>
                <StudentMaterialCard />
              </div>
            </div>
            <div>
              <div className='max-w-[381px] min-h-[102px] flex'>
                <StudentMaterialCard />
              </div>
              <div className='max-w-[381px] min-h-[102px] flex'>
                <StudentMaterialCard />
              </div>

            </div>
          </div>

        </div>
        <div className='mx-4 my-4'>
          <h1 className='mx-8 text-xl'>Assigments</h1>
          <div className='mx-8'>
            <AssignmentsTable />
          </div>
        </div>
        <div className='mx-4 my-4'>
          <h1 className='mx-8 text-xl'>Quiz Section</h1>
          <div className='mx-8 my-4'>
            {/* <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/3"><QuizCard /></CarouselItem>
                <CarouselItem className="basis-1/3"><QuizCard /></CarouselItem>
                <CarouselItem className="basis-1/3"><QuizCard /></CarouselItem>
              </CarouselContent>
            </Carousel> */}
            <Carousel className="max-w-[806px] min-h-[223px]">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <QuizCard />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

        </div>
      </div>
    </div>
  )
}
