import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Tr
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useCookies} from 'react-cookie';


const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
import AlertBar from '@/components/notification/alert'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Link from 'next/link';

export default function SignIn(props){
    const [formData, setFormData] = useState({
        "username":"", "password":""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(undefined)
    const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
    const router = useRouter()

    function handleChange(event){
        const [name, value] = [event.target.name, event.target.value]
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    async function handleSubmit(event){
        event.preventDefault()
        setIsLoading(true)
        try{
            const response = await fetch("http://localhost:8000/api/token/",{
                                method : "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(formData)})
            const result = await response.json()
            console.log(result)
            if (response.status === 200){
                setIsSuccess(true)
                setCookie("Authorization",result.access)
                await delay(3000)
                router.push("/")
            }else{
                console.log("ERROR")
                await delay(3000)
                setIsSuccess(false)   
            }
            
        }
        catch (error){
            setIsSuccess(false)
            console.log(error)
        }     
        setIsLoading(false)   
    }
    if (props.token){
        router.push("/")
    }
    return (
        <div className='w-full flex flex-col items-center pt-48'>
                <a className="flex mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </a>
                <span className="ml-3 text-xl title-font font-medium text-gray-900 mb-10">مسیــــــرتــــ</span>
            <div className='w-1/2'>
            <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <form  className='flex flex-col gap-x-5 gap-y-5' onSubmit={handleSubmit}>
                    <FormControl isRequired>
                            <FormLabel>نام کاربری</FormLabel>
                            <Input isRequired={true} type='text' name='username' value={formData.username} onChange={handleChange}/>
                    </FormControl>
                    <FormControl isRequired>
                            <FormLabel>کلمه عبور</FormLabel>
                            <Input isRequired={true} type='password' placeholder="*******" name='password' value={formData.password} onChange={handleChange}/>
                    </FormControl>
                    <Button type='submit' isLoading={isLoading} loadingText='لطفا صبر کنید' colorScheme='cyan'  className='mx-28'>ورود</Button>
                </form>
                <p className='text-center mt-8 text-lg '>برای ثبت نام به این <Link className='underline text-blue-700' href='/sign-up'>صفحه</Link> مراجعه کنید</p>
            </Box>
            </div>

            {isSuccess !== undefined ?(
                    isSuccess ?
                        <AlertBar status='success' title=".شما با موفقیت وارد شدید."/>
                    : <AlertBar status='error' title="نام کاربری یا کلمه عبور اشتباه است."/>
                ): null
            }
            
        </div>
    )
}