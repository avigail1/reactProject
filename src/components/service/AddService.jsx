import { useState } from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, FormGroup, TextField } from "@mui/material";

import dataStore from '../../data/dataStore'
import { appendService } from '../../data/server'

function AddService() {
  const [open, setOpen] = useState(false);
  const [newServise, setNewService] = useState({
    name: "",
    description: "",
    price:"",
  })

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  async function handleSaveChanges() {
    appendService(newServise);
    setNewService({
      name: "",
      description: "",
      price:""
    })
    handleOpenClose();
  }

  return (
    <>
      <Box>
        <Fab color="secondary" aria-label="add" onClick={handleOpenClose}>
          <AddIcon />
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleOpenClose}>
        <DialogTitle>Add Service</DialogTitle>
        <DialogContent>
          <FormGroup onSubmit={handleSaveChanges}>
            <TextField
              label="name"
              name="name"
              type="text"
              variant="filled"
              value={newServise.name}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="description"
              name="description"
              type="text"
              variant="filled"
              value={newServise.description}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="price"
              name="price"
              type="text"
              variant="filled"
              value={newServise.price}
              onChange={handleChange}
            />
            <br />
            <Button onClick={handleSaveChanges}>add</Button>
          </FormGroup>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddService;
// import AddSomething from "../add/Add"


// export default function AddService(){

//   function saveThisChanges(params) {
//       console.log(params);
//  }
 
//   return ( 
//   <>
//     <AddSomething what={"Service"} SaveChanges={saveThisChanges}/>


//   </>)
 
// }