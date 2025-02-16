import HeaderLiveMonitor from '@/components/HeaderLiveMonitor'
import Image from 'next/image'
import SidebarTeacher from '@/components/SidebarTeacher'
import React from 'react'
import DataCard from '@/components/DataCard'
import MileStoneCard from '@/components/MileStoneCard'
import MileStoneCheck from '@/components/MileStoneCheck'
import StudentLiveCard from '@/components/StudentLiveCard'

export default function page() {
  return (
    <div className='flex flex-row'>
      <div className='min-w-[154px] min-h-[1366px]'
        style={{
          position: 'absolute',
          // top: '80px',
          // left: '120px'
        }}>
        <SidebarTeacher />
      </div>
      <div className='max-w-[870px] min-h-[120px]'
        style={{
          position: 'absolute',
          // top: '80px',
          left: '154px'
        }}
      >
        <HeaderLiveMonitor />
      </div>
      <div className='min-w-[870px] min-h-[1200px] flex flex-row my-2'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <div className='flex  flex-col'>
          <div className='flex flex-row'>
            <div>
              <h1 className='text-2xl'>Class Status Summary</h1>
            </div>
            <div className='flex flex-row justify-end'
              style={{
                position: "absolute",
                left: '700px'
              }}
            >
              <Image
                src="/images/Choose.svg"
                alt="Select"
                width={24}
                height={24}
              />
              <Image
                src="/images/Message.svg"
                alt="Message"
                width={24}
                height={24}
              />
              <Image
                src="/images/Upload.svg"
                alt="Upload"
                width={24}
                height={24}
              />
            </div>

          </div>
          <div className='my-4'>
            <div className='flex flex-row'>
              <h1 className='text-xl'>Total Students: 30</h1>
              <h1 className='text-xl'
                style={{
                  position: "absolute",
                  left: '600px'
                }}
              >Notebook Status: 80%</h1>
            </div>
            <div className='flex flex-row p-2'>
              <div className='mx-6'>
                <DataCard />
              </div>
              <div className='mx-6'>
                <DataCard />
              </div>
              <div className='mx-6'>
                <DataCard />
              </div>
            </div>

          </div>
          <div>
            <h1 className='text-xl'>Milestones Check</h1>
            <div className='flex flex-row justify-between'>
              <MileStoneCard />
              <MileStoneCard />
              <MileStoneCard />
              <MileStoneCheck />
            </div>

          </div>
          <div className='my-4'>
            <h1 className='text-xl my-4'>Student Overview</h1>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between my-2'>
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
              </div>
              <div className='flex flex-row justify-between my-2'>
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
              </div>
              <div className='flex flex-row justify-between my-2'>
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
              </div>
              <div className='flex flex-row justify-between my-2'>
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
                <StudentLiveCard />
              </div>            
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
