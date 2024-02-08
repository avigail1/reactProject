
import { useEffect } from "react"
import "./App.css"
import BusinessData from "./components/businessData/BusinessData"
import EditBusinessData from "./components/businessData/EditBusinessData"
import AddMeeting from "./components/meeting/AddMeeting"
import MeetingList from "./components/meeting/MeetingList"
import ServicesList from './components/service/ServicesList'
import dataStore from "./data/dataStore"


function App() {

  useEffect(() => {
    document.title = dataStore.businessData['name']
  }, [dataStore.businessData['name']])

  return (
     <>
     <div className="nav" >
        <BusinessData/>
     </div>
     <ServicesList/>
     <AddMeeting/>
    </>
  )
}

export default App
