import RouteTable from "@/components/dashboard/main/route_table";
import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { useRouter } from 'next/navigation'

export default function Dashboard(props){
    const router = useRouter()

    if (props.token === undefined){
        console.log(props.token)
        // router.push("/")
    }
    return(
        <div className="flex flex-row">
            <div className="basis-1/6">
                <Sidebar/>
            </div>
            <div className="basis-3/4 p-4">
                <Navbar/>
                <RouteTable/>
            </div>
            
        
        </div>

    )
}

