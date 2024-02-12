import { observer } from "mobx-react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Meeting = observer((value) => {
  const date = (e) => {
    return `${e.d}/${e.m}/${e.y} at ${e.h}:${e.minutes} `;
  }



  return (
    <>
      <div className="meeting-row">
        <EventRoundedIcon className="meeting-icon" />
        <span>{value.serviceNumber}</span>
      </div>
      <div className="meeting-row">
        <PersonIcon className="meeting-icon" />
        <span>{value.clientName}</span>
      </div>
      <div className="meeting-row">
        <AlternateEmailIcon/>
        <span>{value.clientEmail}</span>
      </div>
      <div className="meeting-row">
        <AccessTimeIcon className="meeting-icon" />
        <span>{date(value.dateTime)}</span>
      </div>
    </>
  )
})

export default Meeting
