import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Tr
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
import AlertBar from '@/components/notification/alert'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function SignUp(props){
    const [formData, setFormData] = useState({
        "email":"", "first_name":"", "last_name":"", "username":"", "password":"",
        'verify_password':""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(undefined)
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
        try{
            const response = await fetch("http://localhost:8000/api/register/",{
                                method : "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(formData)})
            const result = await response.json()
            console.log(result)
            if (response.status === 201){
                console.log("Success")
                setIsSuccess(true)
                delay(10000)
                router.push("/sign-in")
            }else{
                console.log("ERROR")
                setIsSuccess(false) 
            }
        }
        catch (error){
            console.log(error)
        }        
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
                <form  className='grid grid-cols-2 gap-x-5 gap-y-5' onSubmit={handleSubmit}>
                    <FormControl isRequired>
                            <FormLabel>نام</FormLabel>
                            <Input isRequired={true} type='text' name='first_name' value={formData.first_name}  onChange={handleChange}/>
                    </FormControl>
                    <FormControl isRequired>
                            <FormLabel>نام خانوادگی</FormLabel>
                            <Input type='text' name='last_name' value={formData.last_name} onChange={handleChange}/>
                    </FormControl>
                    <FormControl isRequired>
                            <FormLabel>ایمیل</FormLabel>
                            <Input isRequired={true} type='email' name='email' value={formData.email}  onChange={handleChange}/>
                    </FormControl>
                    <FormControl isRequired>
                            <FormLabel>نام کاربری</FormLabel>
                            <Input isRequired={true} type='text' name='username' value={formData.username} onChange={handleChange}/>
                    </FormControl>
                    <FormControl isRequired>
                            <FormLabel>کلمه عبور</FormLabel>
                            <Input isRequired={true} type='password' placeholder="*******" name='password' value={formData.password} onChange={handleChange}/>

                    </FormControl>
                    <FormControl isRequired>
                            <FormLabel>تکرار کلمه عبور</FormLabel>
                            <Input isRequired={true} type='password' placeholder="*******" name='verify_password' value={formData.verify_password} onChange={handleChange}/>
                    </FormControl>
                    <Button type='submit' isLoading={isLoading} loadingText='لطفا صبر کنید' colorScheme='cyan'  className='col-span-2 mx-28'>ثبت نام</Button>
                </form>
            </Box>

            </div>

        {isSuccess !== undefined ?(
                isSuccess ?
                    <AlertBar status='success' title="ثبت نام با موفقیت انجام شد."/>
                : <AlertBar status='error' title="در سمت دیتا مشکلی پیش آمده. لطفا دوباره تلاش کنید."/>
            ): null
        }
            
        </div>
    )
}