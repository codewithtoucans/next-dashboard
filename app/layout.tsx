'use client'
import './globals.css'
import {Inter} from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const inter = Inter({subsets: ['latin']})
//
// export const metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const route = usePathname()
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })
    console.log(route)
    return (
        <html lang="en">
        <body className={inter.className}>
        <Sidebar>
            <QueryClientProvider client={queryClient}>
                <AnimatePresence mode="wait">
                    <motion.div initial={{opacity: 0, x: '-100vw'}} animate={{opacity: 1, x: '0'}}
                                exit={{opacity: 0, x: '100vw'}} transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                    }} key={route}>
                        {children}
                    </motion.div>
                </AnimatePresence>
            </QueryClientProvider>
        </Sidebar>
        </body>
        </html>
    )
}
