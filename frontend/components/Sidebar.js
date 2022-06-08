import Link from 'next/link';
import { HomeIcon, CurrencyDollarIcon } from '@heroicons/react/solid'
import { signIn } from 'next-auth/react'

const Sidebar = () => {
    return (
        <div className="text-gray-500 p-5 border-r bg-gray-900 overflow-y-scroll h-screen scrollbar-hide text-xs lg:text-sm sm:min-w-[12rem] lg:min-w-[15rem] hidden md:inline-flex">
          <div className="flex flex-col justify-between w-full">
            <div className="space-y-8 py-20 w-full">
              <Link href="/">
                <a className="flex items-center space-x-2 hover:text-white focus:text-white text-xl">
                <HomeIcon className="h-5 w-5" />
                <p>Home</p>
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="flex items-center space-x-2 hover:text-white focus:text-white text-xl">
                <CurrencyDollarIcon className="h-5 w-5" />
                <p>Portfolio</p>
                </a>
              </Link>
            </div>
            <button className="w-full h-12 bg-cyan-700 hover:bg-cyan-800 focus:bg-cyan-800 text-white rounded-lg text-xl"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </div>
        </div>
      );
}

export default Sidebar