"use client"

import HeaderNotes from '@/components/HeaderNotes'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import { TLUiComponents, Tldraw } from 'tldraw'


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
        <HeaderNotes />
      </div>
      <div className='min-w-[870px] min-h-[1260px]'
        style={{
          position: 'absolute',
          top: '80px',
          left: '154px'
        }}
      >
        <div className='min-w-[838px] min-h-[1174px] bg-slate-300'>
          <div className="min-w-[838px] max-h-[1174px]" style={{ position: 'fixed', inset: '80px 154px' }}>
          <Tldraw  />
          </div>
        </div>
        <div className='flex flex-row justify-between my-4'>
          <Image
            src="/images/Backward.svg"
            alt="Message"
            width={24}
            height={24}
          />
          <Button variant='outline'>Review</Button>
          <Button variant='secondary'>Submit</Button>
          <Image
            src="/images/Forward.svg"
            alt="Message"
            width={24}
            height={24}
          />
        </div>


      </div>
    </div>
  )
}
