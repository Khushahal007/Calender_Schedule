import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Enroll from './Components/Enroll'
import Scheduled from './Components/Scheduled'
import './index.css'


const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Enroll />} />
      <Route path='/schedule' element={<Scheduled />} />
    </Routes>
  )
}

export default App