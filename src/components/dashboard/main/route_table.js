import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Text
} from '@chakra-ui/react'
import { routes } from '@/data/routes'
import RoutRow from './route_row'


export default function RouteTable(props){
    return (
        <div className='pt-20'>
            <TableContainer overflowY='scroll' maxHeight={500}>
            <Text className='text-2xl mb-5'>مسیرهای من</Text>
            <Table variant='simple'>
                <TableCaption>مسیرهای من</TableCaption>
                <Thead>
                <Tr>
                    <Th>ردیف</Th>
                    <Th>تحویل دهنده</Th>
                    <Th>ادرس ها</Th>
                    <Th>زمان انتشار</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {routes.map((x) => {return <RoutRow key={x.id} info={x}/>})}
                </Tbody>
            </Table>
            </TableContainer>
        </div>
    )
}