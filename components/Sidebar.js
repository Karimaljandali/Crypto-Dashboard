import Link from 'next/link';
import { HomeIcon, CurrencyDollarIcon } from '@heroicons/react/solid'

const Sidebar = () => {
    return (
        <div className="text-gray-500 p-5 border-r bg-gray-900 overflow-y-scroll h-screen scrollbar-hide text-xs lg:text-sm sm:min-w-[12rem] lg:min-w-[15rem] hidden md:inline-flex">
          <div className="space-y-8 py-20">
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
        </div>
      );
}

export default Sidebar