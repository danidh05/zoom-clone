"use client";
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { cn } from '@/lib/utils';//cn is shorthand for class names .gies ability to provide different and dynamic class names
import Image from 'next/image';

const SideBar = () => {
    const pathname = usePathname();//Sometimes its not same path for that we the link route or its starting with
    return (
        <section className='sticky left-0 top-0 flex h-screen w-fit flex-col 
        justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route /*|| pathname.startsWith(link.route)*/;


                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn(
                                'flex gap-4 items-center rounded-lg justify-start px-6 py-4', // Add padding here
                                {
                                    'bg-blue-1': isActive, // Apply background color for active state
                                    'px-8 py-5': isActive // Increase padding when active
                                }
                            )} >
                            <Image
                                src={link.imgUrl}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className='text-lg font-semibold max-lg:hidden'>
                                {link.label}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </section >
    )
}

export default SideBar