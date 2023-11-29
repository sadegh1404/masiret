import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import DestinationInput from "@/components/dashboard/main/destination_input";

export default function CreateRouteForm(props){
    const [destinationCount, setDestinationCount] = useState(0)
    function addDest(event){
        event.preventDefault()
        console.log(destinationCount)
        setDestinationCount((prevCount) => prevCount+1)
    }
    return (
        <div className="flex flex-row">
            <div className="basis-1/6">
                <Sidebar/>
            </div>
            <div className="basis-3/4 p-4">
                <Navbar/>
                <div className="mt-20 ">
                    <Box p={8} borderWidth={0} borderRadius={8} boxShadow="lg">
                        <form  className='grid grid-cols-2 gap-x-5 gap-y-5'>
                            <FormControl isRequired>
                                <FormLabel>نام تحویل دهنده</FormLabel>
                                <Input type="text" name="owner" isRequired/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>زمان تحویل</FormLabel>
                                <Input type="datetime-local" name="deliver_time" isRequired/>
                            </FormControl>
                            <FormControl isRequired className="col-span-2">
                                <FormLabel>مبدا</FormLabel>
                                <Input type="text" name="owner" isRequired width="70%" className=" ml-10"/>
                                <Button colorScheme='teal'>نقشه</Button>
                            </FormControl>
                            {(() => {
                                let rows = [];
                                for (let i=0; i<destinationCount; i++){
                                    rows.push(<DestinationInput count={i}/>)
                                }
                                return rows;
                            })()}
                            <Button width={200} onClick={addDest} colorScheme='blue'>اضافه کردن مقصد</Button>
                        </form>
                    </Box>
                </div>
            </div>        
        </div>
    )
}