
import { Button } from "@chakra-ui/react"
import Link from "next/link"
export default function Header(props){
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">ورود
          </button> */}
          <Button colorScheme='blue' variant='outline'>
            {props.token === undefined ?
              <Link href='/sign-in'>ورود / ثبت نام</Link>
              :<Link href='/dashboard'>داشبورد</Link>
            }
          </Button>
          <nav className="md:ml-auto flex flex-row-reverse s flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href='#footer' scroll={false}>ارتباط با ما</Link>
            <Link className="mr-5 hover:text-gray-900" href='#features' scroll={false}>ویژگی ها</Link>
            <Link className="mr-5 hover:text-gray-900" href='#home' scroll={false}>خانه</Link>
          </nav>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">مسیــــــرتــــ</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </a>
        </div>
      </header>
    )
}