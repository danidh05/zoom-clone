import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Yoom",
    description: "Video Calling App",
    icons: {
        icon: '/icons/logo.svg'
    }
};

function HomeLayout({ children }: {
    children:
    ReactNode // ReactNode represents any valyue can be rendered by react
}) {
    return (
        <main className='relative'>
            <Navbar />

            <div className="flex">
                < SideBar />

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">

                    <div className="w-full">
                        {children}
                    </div>

                </section>
            </div>

            Footer
        </main>
    )
}

export default HomeLayout;