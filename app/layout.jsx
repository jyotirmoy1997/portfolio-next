import './globals.css'
import Navigation from '@/components/navigation/navigation.component'
import Footer from '@/components/footer/footer.component'
import { Radio_Canada } from "next/font/google"


const radioCanada = Radio_Canada({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Jyotirmoy Das',
  description: `Hi There ! I am Jyotirmoy Das, A Full-Stack developer primarily focued on 
  The MERN Stack & NextJS. I create dynamic web applications that deliver exceptional 
  user experiences. With a focus on performance and functionality, 
  I turn ideas into reality. Let's build something great!`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={radioCanada.className}>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
