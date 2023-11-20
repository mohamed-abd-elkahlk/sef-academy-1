import React ,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import UploadCv from './components/UploadCv';
import ExamInfo from './components/ExamInfo';
import LoadingSpinner from './components/LoadingSpinner';
function App() {
const [loading , setLoading]=useState(true)
useEffect(() => {
  const timeout = setTimeout(() =>{
    setLoading(false)
  },3000)
  return () =>clearTimeout(timeout) ;
   
}, [])
return loading? <LoadingSpinner/>:<div>Your main content goes here</div>

}

export default App
