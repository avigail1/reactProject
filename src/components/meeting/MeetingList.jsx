import { observer } from "mobx-react"
import dataStore from "../../data/dataStore"
import Meeting from './Meeting'
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import dayjs from "dayjs"

const MeetingList = observer(() => {

  const sortedMeetings = [...dataStore.meeting].sort((a, b) => {
    const dateA = dayjs(a.dateTime.fullDate);
    const dateB = dayjs(b.dateTime.fullDate);
    return dateA - dateB;
  });

  const groupedMeetings = sortedMeetings.reduce((groups, meeting) => {
    const date = dayjs(meeting.dateTime.fullDate);
    const key = date.isSame(dayjs(), 'day')
      ? 'today'
      : date.isSame(dayjs().add(1, 'day'), 'day')
        ? 'tomorrow'
        : 'later';

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(meeting);
    return groups;
  }, {});

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid item xs={6}>
          <h1>the appointments</h1>
        </Grid>
        {Object.entries(groupedMeetings).map(([group, meetings]) => (
          <div key={group} className={group}>
            <h2>{group}</h2>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
              {meetings.map((value, idx) => (
                <Grid item xs={4} sm={6} md={4} key={idx}>
                  <h2>{idx < 9 ? "0" : ""}{idx + 1}</h2>
                  <Meeting {...value} />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Box>
    </>
  )
})

export default MeetingList
