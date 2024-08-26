import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Jobspage from './pages/Jobspage';
import Job from './pages/Job';
import Addjob from './pages/Addjob';
import Errorpage from './pages/Errorpage';
import EditJob from './pages/EditJob';

const App = () => {
  return (
    <>
    <Router>
     <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path="/addjob" element={<Addjob />} />
        <Route path="/editjob/:id" element={<EditJob />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
     </Router>
    </>
  )
}

export default App