import { makeObservable, observable,action } from 'mobx';
import { getServices ,getbussinessData,UpdatebussinessData, getappointments} from './server';
import dayjs from 'dayjs';

class DataStore {
    isLogin = false;
    businessData={};
    services=[];
    meeting=[]
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            businessData: observable,
            setbusinessData: action,
            services: observable,
            setServices: action, 
            meeting:observable,
            setMeeting:observable
        });
    }

    async initializeData() {
        try {
          // Fetch business data and set it
          const data = await getbussinessData();
          this.businessData=data;
    
          // Fetch services and set them
          const services = await getServices();
          this.services=services;
          const meeting=await getappointments();
          this.meeting=meeting;    
          // Log the data after setting it
          console.log('Initialized data:', data, services,meeting);
          
          // Mark login as true if needed
          // this.setIsLogin();
        } catch (error) {
          console.error("Error initializing data:", error);
        }
      }

    setIsLogin(status) {
        this.isLogin = status;
    }
    setServices(newService){
        this.services=[...this.services,newService]
    }
   async setbusinessData(businessData){
      const res=await UpdatebussinessData(businessData);
      if(res===200){
        this.businessData=businessData;
      }
    }
    setMeeting(meeting){
        this.meeting=[...this.meeting,meeting]
    }
    checkAddMeeting(meeting){
        if(meeting.clientName===""||
          meeting.clientPhone===""||
          meeting.clientEmail===""||
          meeting.serviceNumber==="")
        return false;
        if(dayjs(meeting.fullDate).toDate()-new Date()<0)
        return "date";
      return true;
    }
}

export default new DataStore();
