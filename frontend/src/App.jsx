import { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InformationHader from './HomePageComponent/InformationHader'
import Navbar from './HomePageComponent/Navbar'
import Loader from './LoadingPage/Loader'
import DashBoardPage from './UserDashBoard/DashBoardPage';
import './App.css'


function App() {
  const [Loading,SetLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      SetLoading(false);
    },1000);
  },[]);

  return (
    <>
     <Router>
        <Routes>
              {
               Loading ? <Route exact path='/' element={<Loader/>}></Route>: <Route exact path='/' element={<><Navbar/><InformationHader/></>}></Route> 
              }
              <Route exact path='/dashboard' element={<><Navbar/><DashBoardPage/></>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
