import { observer } from 'mobx-react';
import dataStore from '../../data/dataStore';
import Login from './Login';
import AdminHome from './AdminHome';
import BusinessData from '../businessData/BusinessData';
import EditBussinessData from '../businessData/EditBusinessData'
import { Avatar } from '@mui/material';

const AdminPage = observer(() => {
  return (
    <>
      <div className="nav">
        <BusinessData />
      </div>
      {!dataStore.isLogin ? <Login /> : (
        <>
          <div className="nav">
          <Avatar alt="logo image" src="https://www.biu.ac.il/sites/default/files/styles/medium_hero_mobile/public/images/tracks/440_large.jpg?h=85e42549&itok=ZRntWvZC" className="Avatar"/>
            <BusinessData />
            <EditBussinessData/>
          </div>
          <AdminHome />
        </>
      )}
    </>
  );
});

export default AdminPage;
