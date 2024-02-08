import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

export default function Date({ onChange }) {
  const handleDateTimeChange = (newDate) => {
    // Access the selected date and time here
    onChange({
      "fullDate":newDate.$d,
      "d":newDate.$D,
      "m":newDate.$d.getMonth()+1,
      "y":newDate.$y,
      "h":newDate.$d.getHours(),
      "minutes":newDate.$d.getMinutes(),
  })
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="when to meet"
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          onChange={handleDateTimeChange}
          hoursStep={2} // Set hoursStep to 1 to display all hours from 0 to 24
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}