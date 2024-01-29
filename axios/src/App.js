import React from 'react'
import './App.css';
import Layout from './Hoc/Layout/Layout';
import Orderdetails from './component/Page/orderdetails';
import Purchaseorder from './component/ui/Purchaseorder';
import Create from './component/ui/create';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Page/home';
import Notfound from './component/Page/notfound';
import Supply from './component/Page/supply';
import Salesorder from './component/Page/salesorder';
import Report from './component/Page/report';
import Customer from './component/Page/customer';
import Loginform from './component/Page/loginform';
import Dashboard from './component/Page/dashboard';
import Purchasesecondpage from './component/Page/Purchasesecondpage';
import Inventory from './component/Page/inventory';
import Reportsecondpage from './component/Page/Reportsecondpage';
import Reportthirdpage from './component/Page/Reportthirdpage';
import Salespagetwo from './component/Page/Salespagetwo';
import Salespagethree from './component/Page/Salespagethree';
import Singleproduct from './component/Page/Singleproduct';
import Salespagefour from './component/Page/Salespagefour';
import Salespagefive from './component/Page/Salespagefive';
import Purchasepageone from './component/Page/Purchasepageone';
import Purchasrform from './component/Page/Purchasrform';
import Suppliesone from './component/Page/suppliesone';
import Supplyform from './component/Page/supplyform';
function App() {
  return  (
  <Router>
  <Layout>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
      <Route path='/inventory'  element={<Inventory />}/>
      <Route path='/inventory/:slug'  element={<Singleproduct/>}/>

      {/* <Route path='/purchaseFirst'  element={<Orderdetails />}/> */}
      <Route path='/purchaseFirst'  element={<Purchasepageone />}/>
      <Route path='/purchaseFirst/:slug'  element={<Singleproduct />}/>

      <Route path='/suppliess' element={<Suppliesone/>}/>
      <Route path='/supply' element={<Supply/>}/>
      <Route path='/supplyform' element={<Supplyform/>}/>

      <Route path='/sales' element={<Salesorder/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/login' element={<Loginform/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/reportsec' element={<Reportsecondpage/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/purchasenext' element={<Purchasesecondpage/>}/>
      <Route path='/nextreport' element={<Reportsecondpage/>}/>
      <Route path='/reportprev' element={<Report/>}/>
      {/* <Route path='/reportprev' element={<Report/>}/> */}
      <Route path='/reportpagetwo' element={<Reportthirdpage/>}/>
        
        <Route path='/salespgtwo' element={<Salespagetwo/>}/>
        <Route path='/salespagethree' element={<Salespagethree/>}/>
        <Route path='/salespgfour' element={<Salespagefour/>}/>
        <Route path='/salespgfive' element={<Salespagefive/>}/>
        <Route path='/newitem' element={<Purchasrform/>}/>
        

    </Routes>
  </Layout>
  {/* <Purchaseorder/> */}
{/* <Orderdetails/> */}
{/* <Create/> */}


{/* <Invent/> */}
{/* <Inventory/> */}
{/* <Footer/> */}
{/* <Form/> */}
</Router>
  );
}

export default App;
