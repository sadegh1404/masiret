import { Box, Button, Divider } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { IoCreateOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Sidebar(props){
    const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
    const router = useRouter()
    function logout(event){
        removeCookie(['Authorization']);
        router.push("/")
    }

    return (
        <Box p={1} className="h-screen" borderWidth={1} borderRadius={8} boxShadow="sm">
            <a className="flex title-font font-medium items-center md:justify-center justify-center text-gray-900 pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">مسیــــــرتــــ</span>
            </a>
            
            <ul className="flex flex-col gap-1 mt-10">
                <Divider/>
                <Link href="/dashboard">
                    <Button  justifyContent="flex-start" className="w-full" size='lg' variant='ghost' leftIcon={<CiBoxList  size={20}/>}>
                        <p className="text-base font-medium">مسیرهای من</p>
                    </Button>
                </Link>
                <Link href="/dashboard/create">
                    <Button justifyContent="flex-start" className="w-full" size='lg'  variant='ghost' leftIcon={<IoCreateOutline  size={20}/>}>
                        <p className="text-base font-medium">ساخت مسیر جدید</p>
                    </Button>
                </Link>

                <Divider/>
                <Button onClick={logout} justifyContent="flex-start"  size='lg' variant='ghost' leftIcon={<IoExitOutline  size={20}/>}>
                    <p className="text-base font-medium">خروج</p>
                </Button>

            </ul>
        </Box>
    )
}