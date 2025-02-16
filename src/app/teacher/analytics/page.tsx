import React from 'react'

import SidebarTeacher from '@/components/SidebarTeacher'
import HeaderTeacher from '@/components/HeaderTeacher'
import { RadarChartComponent } from '@/components/RadarChart'
import { AreaChartComponent } from '@/components/AreaChart'
import { BarChartComponent } from '@/components/BarChart'

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
      <div className='min-w-[870px] min-h-[1200px] flex flex-row my-2'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <div className='flex  flex-col'>        
          <AreaChartComponent />                   
          <RadarChartComponent />
          <BarChartComponent />
        </div>

      </div>

    </div>
  )
}
