import Link from 'next/link'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
export default function AppHeader() {
  return (
    <nav className='w-full h-16 bg-slate-200 absolute top-0'>
    <div className="absolute top-0 left-0 m-4">
        <Link href="/">
        <p className='text-2xl font-medium underline' id='back-text'>Mohit.fun</p>
        </Link>
    </div>
    </nav>
  )
}
