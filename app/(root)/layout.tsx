import React, { ReactNode } from 'react'

function RootLayout({ children }: {
    children:
    ReactNode // ReactNode represents any valyue can be rendered by react
}) {
    return (
        <main>
            {children}
        </main>
    )
}
// We doont return here a navbar and a side bar as we dont want to see them inside our meeting
export default RootLayout