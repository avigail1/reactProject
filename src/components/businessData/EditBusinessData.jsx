import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, FormGroup, IconButton, Stack, TextField } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import dataStore from "../../data/dataStore";
import Swal from 'sweetalert2'

function EditBusinessData() {
  const [open, setOpen] = useState(false);
 const [bd,setBd]=useState({
  name:dataStore.businessData.name,
  vision: dataStore.businessData.vision,
 })

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBd((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  const handleSaveChanges=()=>{
    handleOpenClose();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        dataStore.setbusinessData(bd);

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <>
    <Stack id="editBusiness">
      <span>edit</span>
     <IconButton aria-label="fingerprint" color="secondary" onClick={handleOpenClose}>
          <Fingerprint />
      </IconButton>
      </Stack>
      <Dialog open={open} onClose={handleOpenClose} fullWidth>
        <DialogTitle>edit business data</DialogTitle>
        <DialogContent>
          <FormGroup onSubmit={handleSaveChanges}>
            <TextField
              label="name"
              name="name"
              type="text"
              variant="filled"
              value={bd.name}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="vision"
              name="vision"
              type="text"
              variant="filled"
              value={bd.vision}
              onChange={handleChange}
            />
            <br />
            <Button onClick={handleSaveChanges}>save</Button>
          </FormGroup>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditBusinessData;

