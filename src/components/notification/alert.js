import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'


export default function AlertBar(props){
    return (
        <div className='w-1/2 mt-5'>
            <Alert status={props.status}>
                <AlertIcon />
                <AlertTitle>{props.title}</AlertTitle>
            </Alert>
        </div>
    )
}