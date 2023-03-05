import Link from 'next/link'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
export default function AppHeader() {
  return (
    <nav className='border-b border-gray-600 md:border-none w-full h-16 bg-slate-200 relative md:absolute md:top-0'>
    <div className="fixed md:absolute top-0 left-0 m-4">
        <Link href="/">
        <p className='text-lg md:text-2xl font-medium underline' id='back-text'>Mohit.fun</p>
        </Link>
    </div>
    </nav>
  )
}
