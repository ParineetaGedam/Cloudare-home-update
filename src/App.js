import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HireTalent from "./pages/HireTalent";
import Privacy from "./pages/PrivacyPolicy"
import Refund from"./pages/RefundPolicy"
import Blacklist from"./pages/Blacklist"
import Consultation from "./pages/Consultation"
import Products from "./pages/Products"
import Payroll from "./pages/Payroll"
import Apply from "./pages/Apply"
import My from "./pages/tax/my"
import KSA from "./pages/tax/ksa"
import Staffing from "./pages/staffing"
// import Jobs from "./pages/Jobs"
import ReactGa from 'react-ga'
import { Terms } from "./pages/Terms";
import Proposal from "./components/Proposal"
function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
  ReactGa.initialize('G-ZFC71L9Z47')
  ReactGa.pageview(window.location.pathname + window.location.search)
  window.onload=()=>setLoading(false)
},[])
document.addEventListener('DOMContentLoaded', () => {
 setLoading(false);
});
if(loading){
  return(
   
    <div className="preloader"></div>
 
  )
}
else{
  return (
    <div className="App">
       <Router>
        <Routes>
          
          {/* <Route path="/" element={<HireTalent/>}></Route> */}
          <Route path="/privacy-policy" element={<Privacy />}></Route>
          <Route path="/refund-policy" element={<Refund />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/blacklist" element={<Blacklist />}></Route>
          <Route path="/payroll" element={<Payroll />}></Route>
          <Route path="/" element={<Products />}></Route>
          <Route path="/solutions" element={<Products />}></Route>
          <Route path="/consultation" element={<Consultation />}></Route>
          <Route path="/hire-talent" element={<HireTalent />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
          <Route path="/tax/my" element={<My />}></Route>
          <Route path="/tax/ksa" element={<KSA />}></Route>
          <Route path="/staffing" element={<Staffing />}></Route>
          {/* <Route path="/jobs" element={<Jobs />}></Route> */}
          <Route path="/proposal" element={<Proposal />}></Route>
         
      </Routes>
          </Router>
    </div>
  );
}
}
export default App;
