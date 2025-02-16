import AssignmentsTable from '@/components/AssignmentsTable'
import React from 'react'

export default function page() {
    return (
        <div>
            <h1 className='text-3xl flex justify-center p-2'>Physics material page</h1>
            <div className='my-4'>
            <AssignmentsTable />
            </div>
            
        </div>
    )
}
