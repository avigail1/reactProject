import axios from "axios";
import dataStore from "./dataStore";
import Swal from 'sweetalert2'


export async function CheckLogin(name, password) {
    try {
        const isValid = await axios.post("http://localhost:8787/login", { name, password });
        if (isValid.status === 200) {
            dataStore.setIsLogin(true);
        }
    }
    catch (e) {
        if (e.response) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "user name or password not correct",
              });
        }
        else {
            alert('server failed');
        }
    }
}

//services
export async function appendService(service) {
    try {
        const isValid = await axios.post("http://localhost:8787/service", service);
        if (isValid.status === 200) {
            dataStore.setServices(service);
            Swal.fire({
                icon: "success",
                title: "The service was successfully set!",
                text: "A confirmation code: 285423668",
            });
            return 200;
        }
    }
    catch (e) {
        if (e) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "there was a mistake, plese check the details and try again"
              });
        }
        else {
            alert('server failed');
        }
    }
}



export async function getServices() {
    try {
        const isValid = await axios.get("http://localhost:8787/services");
        if (isValid.status === 200) {
          return  isValid.data;
        }
    }
    catch (e) {
        if (e.response) {
            alert(e.response);
        }
        else {
            alert(e);
        }
    }
}

//bussinessData
export async function UpdatebussinessData(bussinessData) {
    try {
        const isValid = await axios.put("http://localhost:8787/businessData", bussinessData);
        if (isValid.status === 200) {
            return isValid.status;
        }
    }
    catch (e) {
        if (e.response) {
            alert(e.response);
        } 
        else {
            alert('server failed');
        }
    }
}


 
export async function getbussinessData() {
    try {
        const isValid = await axios.get("http://localhost:8787/businessData");
        if (isValid.status === 200) {
           return isValid.data; 
        }
    }
    catch (e) {
        if (e.response) {
            alert(e.response);
        }
        else {
            alert('server failed');
        }
    }
}

//meeting
export async function appendMeeting(meeting) {
    try {
        const isValid = await axios.post("http://localhost:8787/appointment",meeting);
        if (isValid.status === 200) {
            dataStore.setMeeting(meeting)
            Swal.fire({
                icon: "success",
                title: "The appointment was successfully set!",
                text: "A confirmation code: 285423668",
            });
            return isValid.data; 
        }
    }
    catch (e) {
        if (e.response) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `We could not schedule the meeting at this time. 
                Please try another time!`
              });
        }
        else {
            alert('server failed');
        }
    }
}

export async function getappointments() {
    try {
        const isValid = await axios.get("http://localhost:8787/appointments");
        if (isValid.status === 200) {
           return isValid.data; 
        }
    }
    catch (e) {
        if (e.response) {
            alert(e.response);
        }
        else {
            alert('server failed');
        }
    }
}
