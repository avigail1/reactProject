import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import dataStore from '../../data/dataStore';
import Service from '../service/Service';
import { observer } from 'mobx-react';
import AddService from './AddService';


const ServiceList=observer(()=>{

  return (
    <>
      <Box sx={{ width: '100%' }}>
          <Grid item xs={6}>
            <h1>our services</h1>
          </Grid>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {dataStore.services.map((s, idx) => {
            return (
              <Grid item xs={6} key={idx}>
                <h2>{idx<9?"0":""}{idx + 1}</h2>
                <Service {...s} />
              </Grid>
            )
          }
          )}
        </Grid>
      </Box>
    </>
  )
})

export default ServiceList




