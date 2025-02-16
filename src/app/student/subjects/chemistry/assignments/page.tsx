
import AssignmentsTable from '@/components/AssignmentsTable'

import HeaderGen from '@/components/HeaderGen'

import Sidebar from '@/components/Sidebar'
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
            <div className='min-w-[870px] min-h-[760px]'
                style={{
                    position: 'absolute',
                    top: '80px',
                    left: '154px'
                }}
            >
                <div>
                    <AssignmentsTable />
                    
                </div>
            </div>
        </div>
    )
}
