import { Stack } from "@mui/material"
import dataStore from "../../data/dataStore"
import { observer } from "mobx-react"


const BusinessData=observer(()=> {

    return (
      <>    
      <Stack >
     <h1>{dataStore.businessData.name}</h1>
     <h3>{dataStore.businessData.vision}</h3>
     </Stack>     
      </>
    )
  })
  
  export default BusinessData
  