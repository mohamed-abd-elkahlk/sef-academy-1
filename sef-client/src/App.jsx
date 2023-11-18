import { useState } from 'react'
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import UploadCv from './components/UploadCv';
import ExamInfo from './components/ExamInfo';
function App() {

  return (
    <>
    <ExamInfo/>
    </>
  )
}

export default App
