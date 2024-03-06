
import { useEffect } from "react"
import "./App.css"
import BusinessData from "./components/businessData/BusinessData"
import AddMeeting from "./components/meeting/AddMeeting"
import ServicesList from './components/service/ServicesList'
import dataStore from "./data/dataStore"
import { Avatar } from "@mui/material"


function App() {

  useEffect(() => {
    document.title = dataStore.businessData['name']
  }, [dataStore.businessData['name']])

  return (
     <>
     <div className="nav" >
     <Avatar alt="logo image" src="https://www.biu.ac.il/sites/default/files/styles/medium_hero_mobile/public/images/tracks/440_large.jpg?h=85e42549&itok=ZRntWvZC" className="Avatar"/>
        <BusinessData/>
     </div>
     <ServicesList/>
     <AddMeeting/>
    </>
  )
}

export default App
