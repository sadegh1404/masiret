
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

export default function DestinationInput(props){
    return (
        <FormControl isRequired className="col-span-2">
            <FormLabel>مقصد {props.count+1}</FormLabel>
            <Input  key={props.count} type="text" name="destination" isRequired width="70%" className=" ml-10"/>
            <Button colorScheme='teal'>نقشه</Button>
        </FormControl>
    )
}