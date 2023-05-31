import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Movie } from './movie/Movie';
import { Nav } from './nav/Nav';
import { Form } from './newform/Form';
// import { Form } from './form/Form';

function App() {
  
  
  
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/popularmovies" element={<Movie />} />
    </Routes>  
    </div>
  );
}

export default App;
