"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='w-[154px] min-w-[154px] min-h-screen'>
      <div className='grid justify-items-center py-8'>
        <div>
          <Image
            src="/images/Logo_square.svg"
            alt="Logo"
            width={48}
            height={48}
          />
        </div >
        <div className='flex flex-col my-6'>
          <div className="my-2">
            <Link href="/student/dashboard">
              <Image
                src="/images/Home.svg"
                alt="Home"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="my-2">
            <Link href="/student/subjects">
              <Image
                src="/images/Course.svg"
                alt="Subjects"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="my-2">
            <Link href="/student/analytics">
              <Image
                src="/images/Analytics.svg"
                alt="Analytics"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="my-2">
            <Image
              src="/images/Logout.svg"
              alt="Logout"
              width={24}
              height={24}
            />
          </div>
          <div className="my-2">
            <Link href="/student/profile">
              <Image
                src="/images/Teacher.svg"
                alt="Profile"
                width={24}
                height={24}
              />
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}
