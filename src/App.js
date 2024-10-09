import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage'; 
import Course from './Courses'; 
import Courseoverview from './Courseoverview'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="course" element={<Course />} />
        <Route path="course/:id" element={<Courseoverview />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
