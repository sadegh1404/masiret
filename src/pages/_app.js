import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useCookies} from 'react-cookie';
import { useState , useEffect } from 'react';


export default function App({ Component, pageProps }) {
  const [token, setToken] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  useEffect(()=> {
    setToken(cookies.Authorization)
  },[cookies.Authorization])
  return (
    <ChakraProvider>
      <Component token={token} {...pageProps} />
    </ChakraProvider>
  )

}
