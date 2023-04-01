import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';



function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
// #252934 bg color
// https://github.com/michalsnik/aos  // Animation Library
// INTERSECTION OBSERVER DOCS.:-
//  https://blog.logrocket.com/react-scroll-animations-framer-motion/ 