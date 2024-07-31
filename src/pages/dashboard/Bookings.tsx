import Breadcrumb from "../../Component/dashboard/Breadcrumb.tsx";
import Demo from "../../Component/reusables/datatable/Charts.tsx";
// import {ReusableTableData} from "../../Component/reusables/datatable/MantineDataTable.tsx";

const Bookings = ()=>{
    return (
        <div>
            <Breadcrumb pageName='Bookings' />
            {/*// <ReusableTableData />*/}
            {/*<DriverTable />*/}
            <Demo h={300} w={500} />
        </div>
    )
}

export default Bookings;