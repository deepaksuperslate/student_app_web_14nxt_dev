import { ChemistrySubjectCard } from '@/components/ChemistrySubjectCard'
import HeaderGen from '@/components/HeaderGen'
import { MathsSubjectCard } from '@/components/MathsSubjectCard'
import { PhysicsSubjectCard } from '@/components/PhysicsSubjectCard'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function page() {
  return (
    // <div>
    //   <PhysicsSubjectCard />
    //   <MathsSubjectCard />
    //   <ChemistrySubjectCard />
    // </div>
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
      <div className='min-w-[870px] min-h-[760px]'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <div>
          <div>
            <h1 className='text-xl p-2'>Subjects</h1>
          </div>
          <div>
            <div className='flex flex-row justify-start mx-8'>
              <PhysicsSubjectCard />
              <MathsSubjectCard />
            </div>
            <div className='flex flex-row justify-start mx-8 my-2'>
              <ChemistrySubjectCard />
              <PhysicsSubjectCard />
            </div>
            <div className='flex flex-row justify-start mx-8 my-2'>
              <MathsSubjectCard />
              <ChemistrySubjectCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
