import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";

const ViewUser = ({open,onClose})=>{
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Driver</DialogTitle>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                {/*<Button onClick={handleSubmit(onSubmit)} color="primary">Submit</Button>*/}
            </DialogActions>
        </Dialog>
    )
}
export default ViewUser