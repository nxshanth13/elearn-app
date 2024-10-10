import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage'; 
import Getstarted from './components/Getstarted';

import Course from './Courses'; 
import Courseoverview from './components/Courseoverview'; 

import CourseHome from './CourseHome';
import CourseModule from './components/CourseModule';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/getstarted" element={<Getstarted />} />

        <Route path="course" element={<Course />} />
        <Route path="course/:id" element={<Courseoverview />} /> 

        <Route path='/learn/:id/home' element={<CourseHome />}></Route>
        <Route path='/learn/:id/home/module/:moduleid' element={<CourseModule />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
