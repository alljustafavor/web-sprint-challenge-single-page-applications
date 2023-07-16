import { Route, Routes } from "react-router-dom";
import Navbar from './Comps/Navbar';
import Home from "./Comps/Home";
import Form from "./Comps/Form";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<><Navbar /> <Home /></>} />
        <Route path="/pizza" element={<><Navbar /> <Form /></>} />
      </Routes>
    </>
  );
};
export default App;
