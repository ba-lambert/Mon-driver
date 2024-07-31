// import { ActionIcon, Button, Checkbox, Image, MultiSelect, Stack, TextInput } from '@mantine/core';
// import { DatePicker, type DatesRangeValue } from '@mantine/dates';
// import { IconSearch, IconX, IconEye, IconEdit, IconTrash } from '@tabler/icons-react';
// import dayjs from 'dayjs';
// import { useNavigate } from 'react-router-dom';
// import { ReusableTable } from './ReusableTable';
//
// const employees = [
//     {
//         "name": "Jerald Howell",
//         "department": "Industrial",
//         "company": "Runte Inc",
//         "birthDate": "1950-05-21",
//         "age": 74,
//         "profileImg": "https://docs.spm247.com/ftpcs/2020/Hyundai/SantaFe/2020HyundaiSantaFe-exterior-02.jpg"
//     },
//     // Add other employees here
// ];
//
// const MainComponent = () => {
//     const Navigate = useNavigate();
//
//     const columns = [
//         {
//             accessor: 'profile',
//             render: ({ profileImg }) => (
//                 <Image
//                     src={profileImg}
//                     alt="profile"
//                     className="w-12 h-12 rounded-full object-cover"
//                 />
//             ),
//         },
//         {
//             accessor: 'name',
//             render: ({ name }) => name,
//             filter: (
//                 <TextInput
//                     label="Employees"
//                     description="Show employees whose names include the specified text"
//                     placeholder="Search employees..."
//                     leftSection={<IconSearch size={16} />}
//                     rightSection={
//                         <ActionIcon size="sm" variant="transparent" c="dimmed" onClick={() => setQuery('')}>
//                             <IconX size={14} />
//                         </ActionIcon>
//                     }
//                     value={query}
//                     onChange={(e) => setQuery(e.currentTarget.value)}
//                 />
//             ),
//             filtering: query !== '',
//         },
//         {
//             accessor: 'department',
//             filter: (
//                 <MultiSelect
//                     label="Departments"
//                     description="Show all employees working at the selected departments"
//                     data={departments}
//                     value={selectedDepartments}
//                     placeholder="Search departments…"
//                     onChange={setSelectedDepartments}
//                     leftSection={<IconSearch size={16} />}
//                     clearable
//                     searchable
//                 />
//             ),
//             filtering: selectedDepartments.length > 0,
//         },
//         { accessor: 'company', title: 'Company' },
//         {
//             accessor: 'birthDate',
//             textAlign: 'right',
//             render: ({ birthDate }) => dayjs(birthDate).format('MMM DD YYYY'),
//             filter: ({ close }) => (
//                 <Stack>
//                     <DatePicker
//                         maxDate={new Date()}
//                         type="range"
//                         value={birthdaySearchRange}
//                         onChange={setBirthdaySearchRange}
//                     />
//                     <Button
//                         disabled={!birthdaySearchRange}
//                         variant="light"
//                         onClick={() => {
//                             setBirthdaySearchRange(undefined);
//                             close();
//                         }}
//                     >
//                         Clear
//                     </Button>
//                 </Stack>
//             ),
//             filtering: Boolean(birthdaySearchRange),
//         },
//         {
//             accessor: 'age',
//             textAlign: 'right',
//             render: ({ birthDate }) => dayjs().diff(birthDate, 'year'),
//             filter: () => (
//                 <Checkbox
//                     label="Seniors"
//                     description="Show employees who are older than 70 years"
//                     checked={seniors}
//                     onChange={() => {
//                         setSeniors((current) => !current);
//                     }}
//                 />
//             ),
//         },
//         {
//             accessor: 'actions',
//             title: 'Actions',
//             render: (record) => (
//                 <div className="flex space-x-2">
//                     <ActionIcon color="blue" variant="outline" onClick={() => Navigate(`/dashboard/drivers/${record.name}`)}>
//                         <IconEye size={16} />
//                     </ActionIcon>
//                     <ActionIcon color="green" variant="outline">
//                         <IconEdit size={16} />
//                     </ActionIcon>
//                     <ActionIcon color="red" variant="outline">
//                         <IconTrash size={16} />
//                     </ActionIcon>
//                 </div>
//             ),
//         },
//     ];
//
//     return (
//         <ReusableTable columns={columns} data={employees} />
//     );
// };
//
// export default MainComponent;
