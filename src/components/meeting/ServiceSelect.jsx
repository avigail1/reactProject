import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import dataStore from '../../data/dataStore';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import { Stack } from '@mui/system';


export default function ServiceSelect({onChange}) {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={dataStore.services}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => onChange(value)}
      renderOption={(props, option) => (
        <Stack component="li" {...props}>
          <EventRoundedIcon/> 
           {option.name} 
           <p>({option.description})</p> 
           <span>{option.price} &#36;</span>
        </Stack>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a service"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}
