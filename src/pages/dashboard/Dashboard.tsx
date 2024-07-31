 import { FaAddressBook } from "react-icons/fa";
 import { GrArticle } from "react-icons/gr";
 import { FaCar, FaUserTie } from "react-icons/fa6";
 import Breadcrumb from "../../Component/dashboard/Breadcrumb.tsx";
 import ChartData from "../../Component/dashboard/Main/Chart.tsx";
 import { FaChartLine } from "react-icons/fa";
 import Table from "../../Component/dashboard/Table.tsx";

 const Dashboard = () => {
   const statisticalData = [
     {
       title: "Total Drivers",
       number: 20,
       rate: "5% Increase",
       icon: FaUserTie,
       color: "bg-blue-100 text-blue-500",
     },
     {
       title: "Total Cars",
       number: 50,
       rate: "10% Increase",
       icon: FaCar,
       color: "bg-green-100 text-green-500",
     },
     {
       title: "Total Bookings",
       number: 149,
       rate: "15% Increase",
       icon: FaAddressBook,
       color: "bg-yellow-100 text-yellow-500",
     },
     {
       title: "Blog Articles",
       number: 20,
       rate: "5% Increase",
       icon: GrArticle,
       color: "bg-blue-100 text-blue-500",
     },
   ];

   const ourUsers = [
     {
       fullnames: "Angelique MULISA",
       email: "muhirwa@hotmail.com",
       role: "admin",
       status: "active",
       profile: (
         <img
           src="https://source.boomplaymusic.com/group10/M00/F0/45/2398ae9244f44c10b735af82c95b0931_320_320.jpg"
           alt="profile"
           className="w-10 h-10 rounded-full object-cover"
         />
       ),
     },
     {
       fullnames: "MUHIRWA Fablice",
       email: "muhirwa@hotmail.com",
       role: "client",
       status: "active",
       profile: (
         <img
           src="https://source.boomplaymusic.com/group10/M00/F0/45/2398ae9244f44c10b735af82c95b0931_320_320.jpg"
           alt="profile"
           className="w-10 h-10 rounded-full object-cover"
         />
       ),
     },
     {
       fullnames: "MUHIRWA Fablice",
       email: "muhirwa@hotmail.com",
       role: "client",
       status: "active",
       profile: (
         <img
           src="https://source.boomplaymusic.com/group10/M00/F0/45/2398ae9244f44c10b735af82c95b0931_320_320.jpg"
           alt="profile"
           className="w-10 h-10 rounded-full object-cover"
         />
       ),
     },
     {
       fullnames: "MUHIRWA Fablice",
       email: "muhirwa@hotmail.com",
       role: "client",
       status: "active",
       profile: (
         <img
           src="https://source.boomplaymusic.com/group10/M00/F0/45/2398ae9244f44c10b735af82c95b0931_320_320.jpg"
           alt="profile"
           className="w-10 h-10 rounded-full object-cover"
         />
       ),
     },
     {
       fullnames: "MUHIRWA Fablice",
       email: "muhirwa@hotmail.com",
       role: "client",
       status: "active",
       profile: (
         <img
           src="https://source.boomplaymusic.com/group10/M00/F0/45/2398ae9244f44c10b735af82c95b0931_320_320.jpg"
           alt="profile"
           className="w-10 h-10 rounded-full object-cover"
         />
       ),
     },
   ];

   const columns = [
     { header: "Profile", accessor: "profile" },
     { header: "Full Names", accessor: "fullnames" },
     { header: "Email", accessor: "email" },
     { header: "Role", accessor: "role" },
     { header: "Status", accessor: "status" },
   ];

   const data = [
     { year: 2022, month: "January", label: "Data Point 1", value: 30000 },
     { year: 2022, month: "February", label: "Data Point 2", value: 20000 },
     { year: 2022, month: "March", label: "Data Point 3", value: 40000 },
     { year: 2022, month: "April", label: "Data Point 10", value: 0 },
     { year: 2022, month: "May", label: "Data Point 11", value: 63000 },
     { year: 2022, month: "June", label: "Data Point 12", value: 62000 },
     { year: 2022, month: "July", label: "Data Point 13", value: 65000 },
     { year: 2022, month: "October", label: "Data Point 14", value: 55000 },
     { year: 2022, month: "November", label: "Data Point 15", value: 54000 },
     { year: 2022, month: "December", label: "Data Point 16", value: 10002 },
     { year: 2022, month: "August", label: "Data Point 17", value: 40000 },
     { year: 2023, month: "January", label: "Data Point 4", value: 35000 },
     { year: 2023, month: "February", label: "Data Point 5", value: 22500 },
     { year: 2023, month: "March", label: "Data Point 6", value: 45000 },
     { year: 2023, month: "April", label: "Data Point 10", value: 80000 },
     { year: 2023, month: "May", label: "Data Point 11", value: 63000 },
     { year: 2023, month: "June", label: "Data Point 12", value: 62000 },
     { year: 2023, month: "July", label: "Data Point 13", value: 65000 },
     { year: 2023, month: "October", label: "Data Point 14", value: 55000 },
     { year: 2023, month: "November", label: "Data Point 15", value: 54000 },
     { year: 2023, month: "December", label: "Data Point 16", value: 10002 },
     { year: 2023, month: "August", label: "Data Point 17", value: 40000 },
     { year: 2024, month: "January", label: "Data Point 4", value: 35000 },
     { year: 2024, month: "February", label: "Data Point 5", value: 22500 },
     { year: 2024, month: "March", label: "Data Point 6", value: 45000 },
     { year: 2024, month: "April", label: "Data Point 10", value: 80000 },
     { year: 2024, month: "May", label: "Data Point 11", value: 63000 },
     { year: 2024, month: "June", label: "Data Point 12", value: 62000 },
   ];

   return (
     <div className="w-full bg-gray-50 min-h-screen">
       <Breadcrumb pageName="Dashboard" />
       <div className="flex flex-wrap gap-3 justify-around mt-6">
         {statisticalData.map((item, index) => (
           <div
             key={index}
             className={`flex flex-col p-2 px-4 ${item.color} shadow-lg rounded-lg w-52`}
           >
             <div className="flex items-center justify-between mb-4">
               <item.icon className="text-2xl" />
               <div className="text-right">
                 <h3 className="text-md font-semibold">{item.title}</h3>
                 <p className="text-xl font-bold">{item.number}</p>
                 <p className="text-sm">{item.rate}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
       <p className="text-center my-10 font-semibold text-blue-900">
         Our Statistical Data Monthly Basis
       </p>
       <div className="flex flex-col sm:flex-row h-auto">
         <div className="w-full sm:w-2/3">
           <ChartData data={data} />
         </div>
         <div className="flex flex-col sm:w-1/3 space-y-6">
           <div className="h-auto p-4 rounded-lg bg-white shadow-md flex items-center justify-between">
             <div className="flex flex-col">
               <FaChartLine className="text-blue-500 text-3xl" />
               <span className="text-md font-light text-gray-800 mb-2">
                 Total Earnings
               </span>
               <span className="text-md font-semibold text-gray-800">
                 180,0000,000 RWF
               </span>
               <span className="text-xs text-gray-500">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               </span>
             </div>
           </div>
           <div className="h-auto p-4 rounded-lg bg-white shadow-md flex items-center justify-between">
             <div className="flex flex-col">
               <FaChartLine className="text-blue-500 text-3xl" />
               <span className="text-md font-light text-gray-800 mb-2">
                 Total Payout to Drivers
               </span>
               <span className="text-md font-semibold text-gray-800">
                 250000 RWF
               </span>
               <span className="text-xs text-gray-500">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               </span>
             </div>
           </div>
         </div>
       </div>
       <div className="">
         <p className="text-center font-semibold text-md py-5">Our Clients</p>
         <Table columns={columns} tableData={ourUsers} />
       </div>
     </div>
   );
 };

 export default Dashboard;
