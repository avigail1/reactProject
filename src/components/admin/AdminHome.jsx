import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Outlet, useNavigate } from 'react-router-dom';
import { positions } from '@mui/system';
import { Paper } from '@mui/material';

export default function AdminHome() {
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    // Navigate to the corresponding route when a bottom navigation item is clicked
    if (newValue === 0) {
      navigate('/admin/appointments');
    } else if (newValue === 1) {
      navigate('/admin/services');
    }
  };

  return (
    <Box sx={{ pb: 7 }} >
      <CssBaseline />
<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels onChange={handleChange}>
        <BottomNavigationAction label="Appointments" icon={<CalendarMonthIcon />} />
        <BottomNavigationAction label="Services" icon={<MiscellaneousServicesIcon />} />
      </BottomNavigation>
</Paper>
      <Outlet />
    </Box>
  );
}