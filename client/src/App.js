import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CustomersRoute from './Routers/CustomersRoute';
import AdminRouters from './Routers/AdminRouters';
import MyprofileRouters from './Routers/MyprofileRouters';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     if (currentUser.role === 'ADMIN') {
  //       // navigate('/admin');
  //     } else {
        
  //     }
  //   }
  // }, [currentUser, isAuthenticated, navigate]);

  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<CustomersRoute />} />
        <Route path="/admin/*" element={<AdminRouters />} />
        <Route path="/myprofile/*" element={<MyprofileRouters />} />
      </Routes>
    </div>
  );
}

export default App;
