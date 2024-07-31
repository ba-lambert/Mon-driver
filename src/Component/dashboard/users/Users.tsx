import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaUserEdit, FaEye } from 'react-icons/fa';
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Typography,
    Avatar, Box, Paper, Grid, TextField
} from '@mui/material';
import Table from '../Table';

const columns = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Gender", accessor: "gender" },
    { header: "Country", accessor: "country" },
    { header: "Province", accessor: "province" },
    { header: "District", accessor: "district" },
    { header: "Cell", accessor: "cell" },
];

const initialTableData = [
    { name: "John Doe", age: 28, gender: "Male", country: "USA", province: "California", district: "Los Angeles", cell: "Central" },
    { name: "Jane Smith", age: 22, gender: "Female", country: "Canada", province: "Ontario", district: "Toronto", cell: "Downtown" },
    { name: "Sam Brown", age: 35, gender: "Male", country: "UK", province: "England", district: "London", cell: "Westminster" },
    { name: "Alice Johnson", age: 29, gender: "Female", country: "Australia", province: "New South Wales", district: "Sydney", cell: "Central" },
    { name: "Bob Williams", age: 25, gender: "Male", country: "USA", province: "Texas", district: "Austin", cell: "South" },
    { name: "Charlie Davis", age: 32, gender: "Male", country: "Canada", province: "British Columbia", district: "Vancouver", cell: "North" },
    { name: "David Wilson", age: 40, gender: "Male", country: "UK", province: "Scotland", district: "Edinburgh", cell: "East" },
    { name: "Eve White", age: 30, gender: "Female", country: "USA", province: "Florida", district: "Miami", cell: "South Beach" },
    { name: "Frank Harris", age: 26, gender: "Male", country: "Australia", province: "Victoria", district: "Melbourne", cell: "CBD" },
    { name: "Grace Lee", age: 34, gender: "Female", country: "USA", province: "New York", district: "New York", cell: "Manhattan" },
];

const Userrs = () => {
    const [tableData, setTableData] = useState(initialTableData);
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [newUser, setNewUser] = useState({ name: '', age: '', gender: '', country: '', province: '', district: '', cell: '' });

    const handleDelete = () => {
        const newData = tableData.filter((_, index) => index !== selectedUser.index);
        setTableData(newData);
        setOpenDeleteDialog(false);
    };

    const handleOpenDeleteDialog = (rowIndex: number) => {
        setSelectedUser({ ...tableData[rowIndex], index: rowIndex });
        setOpenDeleteDialog(true);
    };

    const handleOpenEditDialog = (rowIndex: number) => {
        setEditingUser({ ...tableData[rowIndex], index: rowIndex });
        setOpenEditDialog(true);
    };

    const handleEditUser = () => {
        const newData = tableData.map((item, index) => (index === editingUser.index ? editingUser : item));
        setTableData(newData);
        setOpenEditDialog(false);
    };

    const handleOpenAddDialog = () => {
        setOpenAddDialog(true);
    };

    const handleAddUser = () => {
        setTableData([...tableData, newUser]);
        setOpenAddDialog(false);
    };

    const handleClose = () => {
        setOpenModal(false);
        setOpenDeleteDialog(false);
        setOpenEditDialog(false);
        setOpenAddDialog(false);
    };

    const handleOpen = (rowIndex: number) => {
        setSelectedUser(tableData[rowIndex]);
        setOpenModal(true);
    };

    const handleChangeStatus = (rowIndex: number) => {
        // Implement your status change logic here
        console.log('Change status of row:', rowIndex);
    };

    const handleDisable = (rowIndex: number) => {
        // Implement your disable logic here
        console.log('Disable row:', rowIndex);
    };

    const actions = [
        { label: <FaEye className='text-green-950' />, callback: handleOpen },
        { label: <MdDelete className='text-red-500' />, callback: handleOpenDeleteDialog },
        { label: <FaUserEdit className='text-blue-900' />, callback: handleOpenEditDialog },
        { label: "Disable", callback: handleDisable },
    ];

    const actionCellStyle: React.CSSProperties = {
        textAlign: 'center'
    };

    return (
        <div className="space-y-2">
            <button className='text-sm px-3 py-1 items-end rounded-xl bg-blue-950 text-white' onClick={handleOpenAddDialog}>Add New Driver</button>
            <h1 className="text-center">Table with Pagination, Search, and Actions</h1>
            <ViewUser open={openModal} onClose={handleClose} user={selectedUser} />
            <DeleteUserDialog open={openDeleteDialog} onClose={handleClose} onConfirm={handleDelete} />
            <EditUserDialog open={openEditDialog} onClose={handleClose} user={editingUser} setUser={setEditingUser} onSave={handleEditUser} />
            <AddUserDialog open={openAddDialog} onClose={handleClose} user={newUser} setUser={setNewUser} onSave={handleAddUser} />

            <Table
                columns={columns}
                tableData={tableData}
                actions={actions}
                actionCellStyle={actionCellStyle}
            />
        </div>
    );
};

export default Userrs;

const ViewUser = ({ open, onClose, user }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle className="bg-blue-950 text-white text-center font-bold">View User Profile</DialogTitle>
            <DialogContent className="bg-gray-100">
                {user ? (
                    <Paper elevation={3} className="p-6 my-6 bg-white shadow-md rounded-md">
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={4} className="text-center">
                                <Avatar
                                    src={user.profileImage || 'https://via.placeholder.com/150'}
                                    alt={user.name}
                                    className="w-40 h-40 border-4 border-green-600 mx-auto mb-4"
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box mb={2}>
                                    <Typography variant="h6" className="text-gray-700"><strong>Name:</strong> {user.name}</Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography variant="body1" className="text-gray-700"><strong>Age:</strong> {user.age}</Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography variant="body1" className="text-gray-700"><strong>Gender:</strong> {user.gender}</Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography variant="body1" className="text-gray-700"><strong>Country:</strong> {user.country}</Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography variant="body1" className="text-gray-700"><strong>Province:</strong> {user.province}</Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography variant="body1" className="text-gray-700"><strong>District:</strong> {user.district}</Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography variant="body1" className="text-gray-700"><strong>Cell:</strong> {user.cell}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                ) : (
                    <DialogContentText className="text-gray-700">No user selected</DialogContentText>
                )}
                <DialogActions className="bg-gray-100">
                    <Button onClick={onClose} className="bg-green-600 text-white hover:bg-green-700 rounded">Cancel</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

const DeleteUserDialog = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="bg-blue-950 text-white text-center font-bold">Delete User</DialogTitle>
            <DialogContent className="bg-gray-100">
                <DialogContentText className="text-gray-700">
                    Are you sure you want to delete this user?
                </DialogContentText>
            </DialogContent>
            <DialogActions className="bg-gray-100">
                <Button onClick={onClose} className="bg-green-600 text-white hover:bg-green-700 rounded">Cancel</Button>
                <Button onClick={onConfirm} className="bg-red-600 text-white hover:bg-red-700 rounded">Delete</Button>
            </DialogActions>
        </Dialog>
    );
};

const EditUserDialog = ({ open, onClose, user, setUser, onSave }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle className="bg-blue-950 text-white text-center font-bold">Edit User</DialogTitle>
            <DialogContent className="bg-gray-100">
                {user && (
                    <Box component="form" noValidate autoComplete="off">
                        <TextField margin="dense" label="Name" name="name" value={user.name} onChange={handleChange} fullWidth />
                        <TextField margin="dense" label="Age" name="age" value={user.age} onChange={handleChange} fullWidth />
                        <TextField margin="dense" label="Gender" name="gender" value={user.gender} onChange={handleChange} fullWidth />
                        <TextField margin="dense" label="Country" name="country" value={user.country} onChange={handleChange} fullWidth />
                        <TextField margin="dense" label="Province" name="province" value={user.province} onChange={handleChange} fullWidth />
                        <TextField margin="dense" label="District" name="district" value={user.district} onChange={handleChange} fullWidth />
                        <TextField margin="dense" label="Cell" name="cell" value={user.cell} onChange={handleChange} fullWidth />
                    </Box>
                )}
            </DialogContent>
            <DialogActions className="bg-gray-100">
                <Button onClick={onClose} className="bg-green-600 text-white hover:bg-green-700 rounded">Cancel</Button>
                <Button onClick={onSave} className="bg-blue-600 text-white hover:bg-blue-700 rounded">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

const AddUserDialog = ({ open, onClose, user, setUser, onSave }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle className="bg-blue-950 text-white text-center font-bold">Add New User</DialogTitle>
            <DialogContent className="bg-gray-100">
                <Box component="form" noValidate autoComplete="off">
                    <TextField margin="dense" label="Name" name="name" value={user.name} onChange={handleChange} fullWidth />
                    <TextField margin="dense" label="Age" name="age" value={user.age} onChange={handleChange} fullWidth />
                    <TextField margin="dense" label="Gender" name="gender" value={user.gender} onChange={handleChange} fullWidth />
                    <TextField margin="dense" label="Country" name="country" value={user.country} onChange={handleChange} fullWidth />
                    <TextField margin="dense" label="Province" name="province" value={user.province} onChange={handleChange} fullWidth />
                    <TextField margin="dense" label="District" name="district" value={user.district} onChange={handleChange} fullWidth />
                    <TextField margin="dense" label="Cell" name="cell" value={user.cell} onChange={handleChange} fullWidth />
                </Box>
            </DialogContent>
            <DialogActions className="bg-gray-100">
                <Button onClick={onClose} className="bg-green-600 text-white hover:bg-green-700 rounded">Cancel</Button>
                <Button onClick={onSave} className="bg-blue-600 text-white hover:bg-blue-700 rounded">Save</Button>
            </DialogActions>
        </Dialog>
    );
};
