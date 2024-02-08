import { observer } from 'mobx-react';
import dataStore from '../../data/dataStore';
import Login from './Login';
import AdminHome from './AdminHome';
import BusinessData from '../businessData/BusinessData';
import EditBussinessData from '../businessData/EditBusinessData'

const AdminPage = observer(() => {
  return (
    <>
      <div className="nav">
        <BusinessData />
      </div>
      {!dataStore.isLogin ? <Login /> : (
        <>
          <div className="nav">
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
