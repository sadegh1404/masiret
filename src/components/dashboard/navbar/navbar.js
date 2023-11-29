import { Box, Button, Divider, InputGroup, Avatar, InputLeftElement } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { IoCreateOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Input } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Navbar(props){
    return(
        <Box xclassName="w-full" borderWidth={0} borderRadius={0} boxShadow="none">
            <div className="flex flex-row justify-between container">
                <div className="w-1/3">
                    <InputGroup className="bg-gray-200">
                        <InputLeftElement pointerEvents='none'>
                            <CiSearch  size={30}/>
                        </InputLeftElement>
                        <Input type='text' placeholder='جستجو...' />
                    </InputGroup>
                </div>
                <div>
                    <ChevronDownIcon boxSize={6} className="mt-2 ml-3"/>
                    <Avatar name='Sadegh Ranjbar' src='https://bit.ly/dan-abramov' />
                </div>

            </div>
        </Box>
    )
}