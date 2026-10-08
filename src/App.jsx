import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import About from "./pages/Aboutt";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";

function App(){
  return(
    <>
    <h1>Student Portal</h1>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/profile/edit" element={<EditProfile/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
    </>
  );
}
export default App;