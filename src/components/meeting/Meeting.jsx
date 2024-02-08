import { observer } from "mobx-react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import dataStore from "../../data/dataStore";

const Meeting = observer((value) => {
  const date = (e) => {
    return `${e.d}/${e.m}/${e.y} at ${e.h}:${e.minutes} `;
  }
  return (
    <>
          <EventRoundedIcon/>
          <span>{dataStore.serviceNumber}</span>
          <PersonIcon/>
          <h4>{value.clientName}</h4>
          <h6>{value.clientEmail}</h6>
          <AccessTimeIcon/>
          <p>{date(value.dateTime)}</p>

    </>
  )
})

export default Meeting
