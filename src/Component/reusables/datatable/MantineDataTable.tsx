import {DataTable} from 'mantine-datatable';
import {ActionIcon, Image, TextInput, MultiSelect, Stack, Button, Checkbox} from '@mantine/core';
import {IconSearch, IconX} from '@tabler/icons-react';
import dayjs from 'dayjs';
import {useMemo, useState, useEffect} from 'react';
import {useDebouncedValue} from '@mantine/hooks';
import {DatePicker, type DatesRangeValue} from '@mantine/dates';

const DataTableComponent = ({
                                columns,
                                records,
                                page,
                                onPageChange,
                                totalRecords,
                                pageSize,
                                filters,
                                onFilterChange,
                            }: {
    columns: any,
    records: any,
    page: number | null,
    onPageChange: any,
    totalRecords: any,
    pageSize: number,
    filters: any,
    onFilterChange: any,
}) => {
    return (
        <DataTable
            height={500}
            withTableBorder
            striped
            highlightOnHover
            withColumnBorders
            records={records}
            columns={columns}
            totalRecords={totalRecords}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={onPageChange}
            filters={filters}
            onFilterChange={onFilterChange}
            styles={{
                table: {
                    color: '#666',
                },
                header: {
                    color: '#001861',
                    fontSize: '15px',
                    fontStyle: 'italic'
                },
            }}
        />
    );
};

const ReusableTableData = ({initialData, columns}: { initialData: any, columns: any }) => {
    const PAGE_SIZE = 5;
    const [page, setPage] = useState(1);
    const [filteredRecords, setFilteredRecords] = useState(initialData);
    const [query, setQuery] = useState('');
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [birthdaySearchRange, setBirthdaySearchRange] = useState<DatesRangeValue>();
    const [seniors, setSeniors] = useState(false);
    const [debouncedQuery] = useDebouncedValue(query, 200);

    // New states for additional filters
    const [usernameQuery, setUsernameQuery] = useState('');
    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

    // const departments = useMemo(() => {
    //     const depts = new Set(initialData.map((e: any) => e.department));
    //     return [...depts];
    // }, [initialData]);

    const genders = ['male', 'female']; // Example values, adjust as needed
    const categories = ['verified', 'unverified']; // Example values, adjust as needed
    const locations = useMemo(() => {
        const locs = new Set(initialData.map((e: any) => e.location));
        return [...locs];
    }, [initialData]);

    useEffect(() => {
        const filtered = initialData.filter(({
                                                 name,
                                                 department,
                                                 birthDate,
                                                 accountId,
                                                 gender,
                                                 category,
                                                 location
                                             }: any) => {
            if (debouncedQuery !== '' && !name.toLowerCase().includes(debouncedQuery.trim().toLowerCase())) return false;
            if (usernameQuery !== '' && !accountId.username.toLowerCase().includes(usernameQuery.trim().toLowerCase())) return false;
            if (birthdaySearchRange && birthdaySearchRange[0] && birthdaySearchRange[1] &&
                (dayjs(birthdaySearchRange[0]).isAfter(birthDate, 'day') || dayjs(birthdaySearchRange[1]).isBefore(birthDate, 'day'))) return false;
            if (selectedDepartments.length && !selectedDepartments.includes(department)) return false;
            if (selectedGender.length && !selectedGender.includes(gender)) return false;
            if (selectedCategory.length && !selectedCategory.includes(category)) return false;
            if (selectedLocation.length && !selectedLocation.includes(location)) return false;
            if (seniors && dayjs().diff(birthDate, 'year') < 70) return false;
            return true;
        });

        setFilteredRecords(filtered);
        setPage(1);
    }, [debouncedQuery, usernameQuery, birthdaySearchRange, selectedDepartments, selectedGender, selectedCategory, selectedLocation, seniors, initialData]);

    const paginatedRecords = useMemo(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        return filteredRecords.slice(from, to);
    }, [page, filteredRecords]);

    const dynamicColumns = columns.map((col: any) => {
        if (col.accessor === 'profile') {
            return {
                ...col,
                render: ({profileImg}: any) => (
                    <Image src={profileImg} alt="profile" className="w-12 h-12 rounded-full object-cover"/>
                ),
            };
        }
        if (col.accessor === 'accountId.username') {
            return {
                ...col,
                filter: (
                    <TextInput
                        label="Username"
                        description="Show drivers whose usernames include the specified text"
                        placeholder="Search usernames..."
                        leftSection={<IconSearch size={16}/>}
                        rightSection={
                            <ActionIcon size="sm" variant="transparent" c="dimmed" onClick={() => setUsernameQuery('')}>
                                <IconX size={14}/>
                            </ActionIcon>
                        }
                        value={usernameQuery}
                        onChange={(e) => setUsernameQuery(e.currentTarget.value)}
                    />
                ),
                filtering: usernameQuery !== '',
            };
        }
        // if (col.accessor === 'department') {
        //     return {
        //         ...col,
        //         filter: (
        //             <MultiSelect
        //                 label="Departments"
        //                 description="Show all drivers working in the selected departments"
        //                 data={departments}
        //                 value={selectedDepartments}
        //                 placeholder="Search departments…"
        //                 onChange={setSelectedDepartments}
        //                 leftSection={<IconSearch size={16} />}
        //                 clearable
        //                 searchable
        //             />
        //         ),
        //         filtering: selectedDepartments.length > 0,
        //     };
        // }
        // if (col.accessor === 'birthDate') {
        //     return {
        //         ...col,
        //         textAlign: 'right',
        //         render: ({ birthDate }: any) => dayjs(birthDate).format('MMM DD YYYY'),
        //         filter: ({ close }: any) => (
        //             <Stack>
        //                 <DatePicker maxDate={new Date()} type="range" value={birthdaySearchRange}
        //                             onChange={setBirthdaySearchRange} />
        //                 <Button
        //                     disabled={!birthdaySearchRange}
        //                     variant="light"
        //                     onClick={() => {
        //                         setBirthdaySearchRange(undefined);
        //                         close();
        //                     }}
        //                 >
        //                     Clear
        //                 </Button>
        //             </Stack>
        //         ),
        //         filtering: Boolean(birthdaySearchRange),
        //     };
        // }
        // if (col.accessor === 'age') {
        //     return {
        //         ...col,
        //         textAlign: 'right',
        //         render: ({ birthDate }: any) => dayjs().diff(birthDate, 'year'),
        //         filter: () => (
        //             <Checkbox
        //                 label="Seniors"
        //                 description="Show drivers who are older than 70 years"
        //                 checked={seniors}
        //                 onChange={() => setSeniors((current) => !current)}
        //             />
        //         ),
        //     };
        // }
        if (col.accessor === 'gender') {
            return {
                ...col,
                filter: (
                    <MultiSelect
                        label="Gender"
                        description="Show all drivers with the selected gender"
                        data={genders}
                        value={selectedGender}
                        placeholder="Search gender…"
                        onChange={setSelectedGender}
                        leftSection={<IconSearch size={16}/>}
                        clearable
                        searchable
                    />
                ),
                filtering: selectedGender.length > 0,
            };
        }
        if (col.accessor === 'category') {
            return {
                ...col,
                filter: (
                    <MultiSelect
                        label="Category"
                        description="Show all drivers with the selected category"
                        data={categories}
                        value={selectedCategory}
                        placeholder="Search category…"
                        onChange={setSelectedCategory}
                        leftSection={<IconSearch size={16}/>}
                        clearable
                        searchable
                    />
                ),
                filtering: selectedCategory.length > 0,
            };
        }
        if (col.accessor === 'location') {
            return {
                ...col,
                filter: (
                    <MultiSelect
                        label="Location"
                        description="Show all drivers in the selected locations"
                        data={locations}
                        value={selectedLocation}
                        placeholder="Search locations…"
                        onChange={setSelectedLocation}
                        leftSection={<IconSearch size={16}/>}
                        clearable
                        searchable
                    />
                ),
                filtering: selectedLocation.length > 0,
            };
        }
        return col;
    });

    return (
        <DataTableComponent
            columns={dynamicColumns}
            records={paginatedRecords}
            page={page}
            onPageChange={setPage}
            totalRecords={filteredRecords?.length}
            pageSize={PAGE_SIZE}
        />
    );
};

export default ReusableTableData;
