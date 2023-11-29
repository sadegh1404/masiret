
import { Tr, Td } from "@chakra-ui/react"

export default function RoutRow(props){
    return(
        <Tr key={props.info.id}>
            <Td>{props.info.id}</Td>
            <Td>{props.info.owner}</Td>
            <Td>شروع: {props.info.destinations[0]} - پایان: {props.info.destinations[props.info.destinations.length-1]}</Td>
            <Td>{props.info.created_at}</Td>
        </Tr>
    )
}