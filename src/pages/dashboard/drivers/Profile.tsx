 import { useEffect, useState } from "react";
 import Breadcrumb from "../../../Component/dashboard/Breadcrumb";
 import {
   ActionIcon,
   Card,
   Modal,
   Button,
   Text,
   TextInput,
 } from "@mantine/core";
 import {
   IconEdit,
   IconTrash,
   IconPencilCode,
   IconCurrencyDollar,
 } from "@tabler/icons-react";
 import { useDisclosure } from "@mantine/hooks";
 import Demo from "../../../Component/reusables/datatable/Charts";
 import {
   useChangeStatusMutation,
   useDeleteDriverProfileMutation,
   useEditDriverProfileMutation,
   useGetDriverProfileQuery,
 } from "../../../redux/drivers";
 import { useNavigate, useParams } from "react-router-dom";
 import formatDate from "../../../utils/formatDate.ts";
 import ErrorAlert from "../../../Component/Shared/ErrorAlert.tsx";
 import Loader2 from "../../../Component/Shared/Loader2.tsx";
 import { useForm, Controller } from "react-hook-form";
 import { yupResolver } from "@hookform/resolvers/yup";
 import * as yup from "yup";
 import { Grid, Notification} from "@mantine/core";
 import { toast } from "react-toastify";

 function Profile() {
   const [driver, setDriver] = useState(null);
   const [opened, { open, close }] = useDisclosure(false);
   const [openDeleteModal, setOpenDelete] = useState(false);
   const [openDisableModal, setOpenDisable] = useState(false);

   const { id } = useParams();
   const { data, isLoading, isError, error } = useGetDriverProfileQuery(id!);

   const closeModal = () => setOpenDelete(false);
   const closeDisableModal = () => setOpenDisable(false);

   useEffect(() => {
     if (data) {
       setDriver(data.data);
     }
   }, [data]);

   return (
     <>
       <Breadcrumb pageName="My Profile" />
       {isError && <ErrorAlert error={error?.data.message} />}
       {isLoading && <Loader2 />}
       <div className="w-full h-auto flex flex-col sm:flex-row mb-8 space-y-5 sm:space-y-0 space-x-5">
         <div className="sm:w-7/12 h-auto sm:h-56 items-center shadow-lg rounded-xl flex flex-col sm:flex-row p-2 text-sm">
           <div className="sm:w-1/3 flex items-center flex-col justify-around h-full">
             <img
               src="https://docs.spm247.com/ftpcs/2020/Hyundai/SantaFe/2020HyundaiSantaFe-exterior-02.jpg"
               alt="profile"
               className="h-28 w-28 rounded-lg object-cover"
             />
             <div>
               <p className="text-sm font-semibold">{driver?.fullname}</p>
               <p className="text-xs text-gray-500">
                 tel No: {driver?.accountId.phone}
               </p>
             </div>
             <div className="flex flex-row space-x-4">
               <ActionIcon color="green" variant="outline" onClick={open}>
                 <IconEdit size={16} color="green" />
               </ActionIcon>
               <ActionIcon
                 color="red"
                 variant="outline"
                 onClick={() => setOpenDelete(!openDeleteModal)}
               >
                 <IconTrash size={16} color="orange" />
               </ActionIcon>
               <button
                 className="flex items-center space-x-1"
                 onClick={() => setOpenDisable(!openDisableModal)}
               >
                 <IconPencilCode size={16} color="red" />
                 <p>Disable</p>
               </button>
             </div>
           </div>
           <div className="w-2/3 h-full px-3 space-y-5">
             <div className="mb-2">
               <h3 className="uppercase font-semibold text-blue-900 mb-1">
                 Personal Information
               </h3>
               <div className="flex text-xs flex-col space-y-1">
                 <p>
                   <span className="font-semibold">Gender:</span>{" "}
                   {driver?.gender}
                 </p>
                 <p>
                   <span className="font-semibold">Address:</span>{" "}
                   {driver?.location}
                 </p>
                 <p>
                   <span className="font-semibold">Email:</span>{" "}
                   {driver?.accountId.email}
                 </p>
               </div>
             </div>
             <div className="mb-4">
               <h3 className="uppercase font-semibold text-blue-900 mb-1">
                 Driver's License Information
               </h3>
               <div className="flex flex-col text-xs space-y-1">
                 <p>
                   <span className="font-semibold">License Number:</span>{" "}
                   {driver?.licenseNumber}
                 </p>
                 <p>
                   <span className="font-semibold">License Type:</span>{" "}
                   {driver?.licenseCategory}{" "}
                 </p>
                 <p>
                   <span className="font-semibold">Issue Date:</span>{" "}
                   {formatDate(driver?.DOB)}{" "}
                 </p>
                 <p>
                   <span className="font-semibold">Driver category:</span>{" "}
                   {driver?.category}
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="sm:w-5/12 h-auto sm:h-56 flex flex-col space-y-4">
           <Card
             shadow="sm"
             padding="lg"
             className="flex space-x-3 flex-col sm:flex-row bg-blue-100 text-sm"
           >
             <div className="sm:w-1/2 flex flex-col">
               <div className="flex items-start mb-2">
                 <Text size="xs" color="green">
                   Total Approved Bookings:
                 </Text>
                 <Text size="sm" className="ml-auto">
                   131
                 </Text>
               </div>
               <div className="flex items-center mb-2">
                 <Text size="xs" color="red">
                   Total Failed Bookings:
                 </Text>
                 <Text size="sm" className="ml-auto">
                   120
                 </Text>
               </div>
               <div className="flex items-center mb-2">
                 <IconCurrencyDollar size={10} color="blue" className="mr-2" />
                 <Text size="xs" color="blue">
                   Total Raised Amounts:
                 </Text>
                 <Text size="sm" className="ml-auto">
                   $1,310,000
                 </Text>
               </div>
             </div>
             <Demo h={100} w={200} />
           </Card>
         </div>
       </div>
       <p className="text-center mb-5 font-semibold">My Completed Bookings</p>
       {/*<SearchingAndFilteringExample />*/}
       <EditDriverProfile opened={opened} closed={close} id={id} />
       <DeleteDriverProfile
         openDeleteModal={openDeleteModal}
         close={closeModal}
         id={id}
       />
       <DisableDriverModal
         openDisableModal={openDisableModal}
         closeDisableModal={closeDisableModal}
         id={id}
       />
     </>
   );
 }

 export default Profile;

 interface FormData {
   fullname: string;
   phone: string;
   email: string;
   address: string;
 }

 const schema = yup.object().shape({
   fullname: yup.string().required("Full Name is required"),
   phone: yup
     .string()
     .matches(/^\d{10}$/, "Phone number must be 10 digits")
     .required("Phone number is required"),
   email: yup.string().email("Invalid email").required("Email is required"),
   address: yup.string().required("Address is required"),
 });

 const EditDriverProfile = ({
   opened,
   closed,
   id,
 }: {
   opened: boolean;
   closed: () => void;
   id: string;
 }) => {
   const { handleSubmit, control, reset, setValue } = useForm<FormData>({
     resolver: yupResolver(schema),
   });

   const { data: driverData, isLoading: isDriverLoading } =
     useGetDriverProfileQuery(id!);
   const [editDriver, { isError, error, isSuccess, isLoading }] =
     useEditDriverProfileMutation();

   useEffect(() => {
     if (driverData) {
       console.log("driverData:", driverData);
       setValue("fullname", driverData.data.fullname);
       setValue("phone", driverData.data.accountId.phone);
       setValue("email", driverData.data.accountId.email);
       setValue("address", driverData.data.location);
     }
   }, [driverData, setValue]);

   const onSubmit = async (formData: FormData) => {
     try {
       await editDriver({ id, payloads: formData }).unwrap();
       reset();
       closed();
     } catch (error) {
       console.error("Failed to edit driver:", error);
     }
   };

   return (
     <Modal opened={opened} onClose={closed} title="Edit Profile">
       <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Grid>
           <Controller
             name="fullname"
             control={control}
             render={({ field }) => (
               <Grid.Col sm={12} lg={12}>
                 <TextInput
                   label="Full Name"
                   placeholder="Full Name"
                   required
                   {...field}
                 />
               </Grid.Col>
             )}
           />
           <Controller
             name="phone"
             control={control}
             render={({ field }) => (
               <Grid.Col sm={12} lg={12}>
                 <TextInput
                   label="Phone"
                   placeholder="Phone"
                   required
                   {...field}
                 />
               </Grid.Col>
             )}
           />
           <Controller
             name="email"
             control={control}
             render={({ field }) => (
               <Grid.Col sm={12} lg={12}>
                 <TextInput
                   label="Email"
                   placeholder="Email"
                   required
                   {...field}
                 />
               </Grid.Col>
             )}
           />
           <Controller
             name="address"
             control={control}
             render={({ field }) => (
               <Grid.Col sm={12} lg={12}>
                 <TextInput
                   label="Address"
                   placeholder="Address"
                   required
                   {...field}
                 />
               </Grid.Col>
             )}
           />
           <Grid.Col span={12}>
             <Button type="submit" fullWidth>
               Save Changes
             </Button>
           </Grid.Col>
         </Grid>
       </form>
     </Modal>
   );
 };

 const DeleteDriverProfile = ({
   openDeleteModal,
   close,
   id,
 }: {
   openDeleteModal: boolean;
   close: () => void;
   id: string;
 }) => {
   const [deleteDriver, { isError, error, isLoading }] =
     useDeleteDriverProfileMutation();
   const navigate = useNavigate();

   const handleDelete = async () => {
     try {
       await deleteDriver(id).unwrap();
       close();
       toast.success("Driver profile deleted successfully");
       navigate("/path/to/redirect"); // Replace with actual path to redirect after deletion
     } catch (error) {
       console.error("Failed to delete driver profile:", error);
     }
   };

   return (
     <Modal
       opened={openDeleteModal}
       onClose={close}
       title="Delete Driver Profile"
     >
       <Text>Are you sure you want to delete this profile?</Text>
       <Button onClick={handleDelete} color="red" fullWidth loading={isLoading}>
         Delete
       </Button>
       {isError && (
         <Notification color="red">
           {(error as any)?.data?.message || "Failed to delete profile"}
         </Notification>
       )}
     </Modal>
   );
 };

 const DisableDriverModal = ({
   openDisableModal,
   closeDisableModal,
   id,
 }: {
   openDisableModal: boolean;
   closeDisableModal: () => void;
   id: string;
 }) => {
   const [changeStatus, { isError, error, isLoading }] =
     useChangeStatusMutation();

   const handleDisable = async () => {
     try {
       await changeStatus({ id, status: "disabled" }).unwrap();
       closeDisableModal();
       toast.success("Driver profile disabled successfully");
     } catch (error) {
       console.error("Failed to disable driver profile:", error);
     }
   };

   return (
     <Modal
       opened={openDisableModal}
       onClose={closeDisableModal}
       title="Disable Driver Profile"
     >
       <Text>Are you sure you want to disable this profile?</Text>
       <Button
         onClick={handleDisable}
         color="orange"
         fullWidth
         loading={isLoading}
       >
         Disable
       </Button>
       {isError && (
         <Notification color="red">
           {(error as any)?.data?.message || "Failed to disable profile"}
         </Notification>
       )}
     </Modal>
   );
 };
