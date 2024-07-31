import Breadcrumb from "../../Component/dashboard/Breadcrumb.tsx";
import { useEffect, useState } from "react";
import NewDriver from "./drivers/NewDriver.tsx";
import ReusableTableData from "../../Component/reusables/datatable/MantineDataTable.tsx";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import formatDate from "../../utils/formatDate.ts";
import Loader2 from "../../Component/Shared/Loader2.tsx";

interface IAccountId {
    _id: string;
    username: string;
    email: string;
    phone: string;
    role: string;
    password: string;
    provider: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface IDrivers {
    _id: string; // Ensure you have an identifier like _id
    username: string;
    category: string;
    fullname: string;
    gender: string;
    DOB: string;
    licenseNumber: string;
    licenseCategory: string;
    location: string;
    availabilityStatus: string;
    accountId: IAccountId;
}

const Drivers = () => {
    const [open, setOpen] = useState(false);
    const [driver, setDriver] = useState<IDrivers[]>([]);
    const navigate = useNavigate();
    const { data, isLoading } = useGetDriversQuery();

    useEffect(() => {
        if (data) {
            setDriver(data.data);
        }
    }, [data]);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const columns = [
        { accessor: 'accountId.username', title: 'Username' },
        { accessor: 'fullname', title: 'Fullname' },
        { accessor: 'category', title: 'Category' },
        { accessor: 'gender', title: 'Gender' },
        { accessor: 'DOB', title: 'Birth Date', render: (row: IDrivers) => formatDate(row.DOB) },
        { accessor: 'licenseNumber', title: 'Licence Number' },
        { accessor: 'location', title: 'Location' },
        { accessor: 'availabilityStatus', title: 'Availability' },
        {
            accessor: '_id', // Assuming _id is the unique identifier
            title: 'Actions',
            render: (row: IDrivers) => (
                <div className="flex space-x-2">
                    <ActionIcon
                        color="blue"
                        variant="outline"
                        onClick={() => navigate(`/dashboard/drivers/${row._id}`)} // Navigate to driver details page
                    >
                        <IconEye size={16} />
                    </ActionIcon>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Breadcrumb pageName='Drivers' />
            <div className="space-y-6">
                <NewDriver open={open} onClose={handleClose} />
                <button
                    className='py-1 uppercase italic text-sm px-4 rounded-full bg-blue-900 text-white cursor-pointer'
                    onClick={handleOpen}
                >
                    Add Driver
                </button>
                {isLoading ? <Loader2 /> : <ReusableTableData initialData={driver} columns={columns} />}
            </div>
        </div>
    );
};

export default Drivers;
