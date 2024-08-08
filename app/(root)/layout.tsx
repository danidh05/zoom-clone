import React, { ReactNode } from 'react'

import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Yoom",
    description: "Video Calling App",
    icons: {
        icon: '/icons/logo.svg'
    }
};

function RootLayout({ children }: {
    children:
    ReactNode // ReactNode represents any valyue can be rendered by react
}) {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}
// We doont return here a navbar and a side bar as we dont want to see them inside our meeting
export default RootLayout