import { Button, Dialog, DialogContent, DialogTitle, Fab, FormGroup, Stack, TextField } from "@mui/material"
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useState } from "react";
import ServiceSelect from "./ServiceSelect";
import dataStore from "../../data/dataStore";
import Date from "./date";
import { appendMeeting } from "../../data/server";
import Swal from 'sweetalert2'

function AddMeeting() {
  const [open, setOpen] = useState(false);

  const [meeting, setMeeting] = useState({
    serviceNumber: "",
    servicePrice: "",
    dateTime: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    fullDate:"",
  })

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeeting((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  const handleSaveChanges = () => {
   const res= dataStore.checkAddMeeting(meeting);
   console.log(res)
   if(res===true){
     appendMeeting(meeting);
     handleOpenClose();
   }
   else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: res===false?"one or more from the fields is not full":"the date is already exist, please enter enother date",
    });
   }

  }

  const handleServiceSelect = (event) => {
    const num = dataStore.services.findIndex(e => e.name === event.name);
    setMeeting((prevDetails) => ({
      ...prevDetails,
      ["serviceNumber"]: event.name,
      ["servicePrice"]: dataStore.services[num].price
    }));
  }

  const handleDateSelect=(e)=>{
    setMeeting((prevDetails) => ({
      ...prevDetails,
      ["dateTime"]:e,
      ["fullDate"]:e.fullDate.toString(),
    }));
  }

  return (
    <>
      <h1>{`Let's work together.`}</h1>
      <Fab color="secondary" aria-label="edit" onClick={handleOpenClose}>
        <EventNoteIcon />
      </Fab>
      <Dialog open={open} onClose={handleOpenClose}   style={{ zIndex: 0 }}>
        <DialogTitle>Add Meeting</DialogTitle>
        <DialogContent>
          <FormGroup onSubmit={handleSaveChanges}>
            <TextField
              label="enter your name"
              name="clientName"
              type="text"
              variant="filled"
              value={meeting.clientName}
              onChange={handleChange}
              required={true}
            />
            <br />
            <TextField
              label="your phone"
              name="clientPhone"
              type="phone"
              variant="filled"
              value={meeting.clientPhone}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="your email"
              name="clientEmail"
              type="email"
              variant="filled"
              value={meeting.clientEmail}
              onChange={handleChange}
            />
            <br/>
            <Date onChange={handleDateSelect} />
            <br />
            <ServiceSelect onChange={handleServiceSelect} />
            <br/>
            <Button onClick={handleSaveChanges}>to meet us</Button>
          </FormGroup>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddMeeting
