import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomersRoute from './Routers/CustomersRoute';
import AdminRouters from './Routers/AdminRouters';
// import Routers from './Routers/Routers';

function App() {
  const isAdmin=true;


  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element={<CustomersRoute />} />
        <Route path="/admin/*" element={<AdminRouters />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
