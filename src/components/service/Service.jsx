import { observer } from "mobx-react";

const Service=observer((s)=>{
    return (
      <>
      <h3>{s.name}</h3>
      <p>{s.description}</p>
      </>
    )
  })
  
  export default Service
  