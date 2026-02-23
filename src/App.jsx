import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Doctors from "./pages/Doctors";
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
 <Route path="/doctors" element={<Doctors />} />
  </Routes>
  </BrowserRouter>)
}

export default App;
