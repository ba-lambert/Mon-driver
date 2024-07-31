import Breadcrumb from "../../Component/dashboard/Breadcrumb.tsx";
import Userrs     from "../../Component/dashboard/users/Users.tsx";
import { FaTaxi } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
const Users = () =>{
    const userStatisticalData = [
        {
            title:"Total Drivers",
            number:30,
            icon:<FaTaxi size={40} className='text-blue-900' />,
            styles:'bg-green-100 text-green-500',
        },
        {
            title:"Total Clients",
            number:30,
            icon:<MdPeople size={40} className='text-blue-900' />,
            styles: 'bg-blue-100 text-green-500',
        },
        {
            title:"Total Admins",
            number:30,
            icon:<RiAdminFill size={40} className='text-blue-900' />,
            styles: 'bg-yellow-100 text-yellow-500',
        },
    ]
    return (
        <div>
            <Breadcrumb pageName='Users' />
            <div className='flex flex-row flex-wrap justify-around mb-5'>
            {userStatisticalData && userStatisticalData.map((data,index)=>(
                <div key={index} className={`w-[200px] h-20 rounded-lg shadow px-5 py-3 flex flex-row justify-between items-center ${data.styles}`}>
                    {data.icon}
                    <div>
                    <p className='font-light'>{data.title}</p>
                    <p className='font-semibold text-end'>{data.number}</p>
                    </div>
                </div>
            ))}
            </div>
            <Userrs />
        </div>
    )
}
export default Users;