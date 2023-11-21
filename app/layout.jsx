"use client"
import './globals.css'
import "./page.module.css"
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

 const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      
      <body > 
      <div>
        
         </div>
         <div className={inter.className}>
         {children}
         </div>
        </body>
    </html>
  )
}
