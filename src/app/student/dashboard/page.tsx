
import HeaderGen from '@/components/HeaderGen'

import Sidebar from '@/components/Sidebar'

import React from 'react'
import Image from 'next/image'
import { LiveCard } from '@/components/LiveCard'
import TaskCard from '@/components/TaskCard'
import MaterialCard from '@/components/MaterialCard'
import { AssignmentCard } from '@/components/AssignmentCard'
import { Card } from '@/components/ui/card'
import { TimeCard60 } from '@/components/TimeCard60'
import { TimeCard45 } from '@/components/TimeCard45'
import { TimeCard30 } from '@/components/TimeCard30'
import { TimeCard30s } from '@/components/TimeCard30s'

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
        {/* <div className='max-w-[870px] max-h-[120px] flex flex-row items-center justify-between'>        
            <div className='min-w-[263px] min-h-[48px] flex justify-center'>
              <Image
                src="/images/Backward.svg"
                alt="Picture of the author"
                width={48}
                height={48}
              />
              <div className='justify-evenly p-1'>
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight mx-2">
                  Hello Ankit!
                </h1>
              </div>

            </div>
            <div className='min-w-[607px] min-h-[48px] flex justify-end items-center'>
              <Image
                src="/images/Notification.svg"
                alt="Picture of the author"
                width={48}
                height={48}
              />
            </div>    
        </div> */}
        <HeaderGen />
      </div>
      <div className='min-w-[870px] min-h-[1200px]'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <LiveCard />
        <div className='min-w-[488px] min-h-[40px] items-center'
          style={{
            position: 'absolute',
            top: '236px',
            // left: '154px'
          }}>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
              <h1 className='text-xl'>Todays Timeline</h1>
            </div>
            <div className='flex flex-row justify-center'>
              <h2>02-02-2024</h2>
              <Image
                src="/images/Calender.svg"
                alt="Calender"
                width={24}
                height={24}
              />
            </div>
          </div>


        </div>
        <div className='min-w-[488px] min-h-[648px] flex flex-row'
          style={{
            position: 'absolute',
            top: '276px',
            // left: '154px'
          }}>
          <div className='min-w-[123px] min-h-[624px]'>
            <Image
              src="/images/Time Slots.svg"
              alt="Science"
              width={123}
              height={624}
            />

          </div>
          <div className='min-w-[336px] min-h-[624px]  flex flex-col justify-center items-center'>
            <div className='my-2'>
            <TimeCard60 />
            </div>
            <div className='my-2'>
            <TimeCard45 />
            </div>
            <div className='my-10'>
            <TimeCard30 />
            </div >
            <div className='my-20'>
            <TimeCard30s />
            </div>
          </div>
        </div>
        <div className='min-w-[318px] min-h-[360px]'
          style={{
            position: 'absolute',
            top: '0px',
            left: '488px'
          }}>
          <Card>
            <div className='flex flex-row justify-evenly'>
              <h1>Tasks due today</h1>
              <Image
                src="/images/Forward.svg"
                alt="Science"
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-col p-4'>
              <div className='p-2'><TaskCard /></div>
              <div className='p-2'><TaskCard /></div>
              <div className='p-2'><TaskCard /></div>
              {/* <TaskCard />
            <TaskCard /> */}
            </div>
          </Card>

        </div>
        <div className='min-w-[318px] min-h-[360px]'
          style={{
            position: 'absolute',
            top: '360px',
            left: '488px'
          }}
        >
          <Card className=''>
            <div className='flex flex-row justify-evenly'>
              <h1 className=''>Materials</h1>
              <Image
                src="/images/Forward.svg"
                alt="Science"
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-col p-4'>
              <div className='p-2'><MaterialCard /></div>
              <div className='p-2'><MaterialCard /></div>
              <div className='p-2'><MaterialCard /></div>
              {/* <TaskCard />
            <TaskCard /> */}
            </div>
          </Card>

        </div>
        <div className='min-w-[318px] min-h-[360px] '
          style={{
            position: 'absolute',
            top: '720px',
            left: '488px'
          }}
        >
          <Card>
            <div className='flex flex-row justify-evenly'>
              <h1>Assignments</h1>
              <Image
                src="/images/Forward.svg"
                alt="Science"
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-col p-4'>
              <div className='p-2'><AssignmentCard /></div>
              <div className='p-2'><AssignmentCard /></div>
              <div className='p-2'><AssignmentCard /></div>
              {/* <TaskCard />
            <TaskCard /> */}
            </div>
          </Card>

        </div>
      </div>
    </div>
    // <div className='min-w-[1024px] min-h-[1366px] bg-slate-500'>

    // </div>
  )
}
