// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import Home from './component/home';
import Contact from './component/contact';
import About from './component/about';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/Home" element={<Home />} />

          {/* <Route path="/Home/Moke" element={<Moke />} /> */}


          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<p1>no routies availed in here</p1>}
          />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

