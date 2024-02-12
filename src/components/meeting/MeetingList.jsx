import { observer } from "mobx-react"
import dataStore from "../../data/dataStore"
import Meeting from './Meeting'
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
// import { red ,green ,orange} from "@mui/material/colors"
import dayjs from "dayjs"

const MeetingList = observer(() => {


  const getcolor = (e) => {
    const today = new Date();
    const timeDifference = dayjs(e.fullDate).toDate() - today;
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24)) + 1;
    if (daysDifference <= 1) {
      return "red";
    }
    if (daysDifference <= 7) {
      return "orange";
    }
    return "green";
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid item xs={6}>
          <h1>the appoitments</h1>
        </Grid>
        <Grid container spacing={2}>
          {dataStore.meeting.map((value, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx} color={getcolor(value)}>
              <h2>{idx < 9 ? "0" : ""}{idx + 1}</h2>
              <Meeting {...value} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
})

export default MeetingList
