import React from 'react'
import Image from 'next/image'
import { LiveCard } from '@/components/LiveCard'
import TaskCard from '@/components/TaskCard'

import { Card } from '@/components/ui/card'

import { PrepNewClassCard } from '@/components/PrepNewClassCard'
import { AutoTestCard } from '@/components/AutoTestCard'
import { UploadMaterialCard } from '@/components/UploadMaterialCard'
import { AnalyticsChart } from '@/components/AnalyticsChart'
import SidebarTeacher from '@/components/SidebarTeacher'
import HeaderTeacher from '@/components/HeaderTeacher'



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
        <HeaderTeacher />
      </div>
      <div className='min-w-[870px] min-h-[1200px] flex flex-row justify-evenly my-2'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <div>
          <LiveCard />
        </div>

        <div className='min-w-[350px] min-h-[448px]'
          style={{
            // position: 'absolute',
            top: '0px',
            // left: '488px'
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
            </div>
          </Card>

        </div>

      </div>
      <div className='min-w-[838px] min-h-[469px] flex flex-col'
        style={{
          position: 'absolute',
          top: '420px',
          left: '154px'
        }}>
        <div>
          <h1>Quick Actions</h1>
        </div>

        <div className='flex flex-row my-10'>
          <div className='p-2'>
            <PrepNewClassCard />
          </div>
          <div className='p-2'>
            <AutoTestCard />
          </div>
          <div className='p-2'>
            <UploadMaterialCard />
          </div>
        </div>
      </div>
      <div className='min-w-[838px] min-h-[469px] flex flex-col'
        style={{
          position: 'absolute',
          top: '889px',
          left: '154px'
        }}>
        <div>
          <h1>Analytics</h1>
        </div>
        <div>
          <AnalyticsChart />
        </div>

      </div>
    </div>
  )
}
