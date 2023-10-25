import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Sidebar} from "./components/Sidebar";


const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: 'OMNI hair',
    description: 'Manages your hair salon',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={'flex'}>
            <Sidebar/>
            <main
                className="bg-neutral w-full flex min-h-screen flex-col items-center justify-between p-2">
                <div className={'bg-base-100 rounded-md h-full w-full'}>
                    {children}
                </div>
            </main>
        </div>
        </body>
        </html>
    )
}
